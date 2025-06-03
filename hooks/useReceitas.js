import { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';

const db = SQLite.openDatabase('receitas.db');

export default function useReceitas() {
  const [receitas, setReceitas] = useState([]);
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [modoPreparo, setModoPreparo] = useState('');
  const [busca, setBusca] = useState('');
  const [editando, setEditando] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS receitas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, ingredientes TEXT, modoPreparo TEXT);`
      );
    });
    carregarReceitas();
  }, []);

  const carregarReceitas = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM receitas', [], (_, { rows }) => {
        setReceitas(rows._array);
      });
    });
  };

  const adicionarReceita = () => {
    if (!nome || !ingredientes || !modoPreparo) return;
    db.transaction(tx => {
      tx.executeSql('INSERT INTO receitas (nome, ingredientes, modoPreparo) VALUES (?, ?, ?)', [nome, ingredientes, modoPreparo], () => {
        carregarReceitas();
        limparCampos();
        setModalVisible(false);
      });
    });
  };

  const atualizarReceita = () => {
    if (!editando || !nome || !ingredientes || !modoPreparo) return;
    db.transaction(tx => {
      tx.executeSql('UPDATE receitas SET nome = ?, ingredientes = ?, modoPreparo = ? WHERE id = ?', [nome, ingredientes, modoPreparo, editando], () => {
        carregarReceitas();
        limparCampos();
        setEditando(null);
        setModalVisible(false);
      });
    });
  };

  const excluirReceita = (id) => {
    Alert.alert('Confirmar exclusão', 'Tem certeza que deseja excluir esta receita?', [
      { text: 'Cancelar' },
      {
        text: 'Excluir', onPress: () => {
          db.transaction(tx => {
            tx.executeSql('DELETE FROM receitas WHERE id = ?', [id], () => {
              carregarReceitas();
            });
          });
        }, style: 'destructive'
      },
    ]);
  };

  const abrirModalEdicao = (receita) => {
    setNome(receita.nome);
    setIngredientes(receita.ingredientes);
    setModoPreparo(receita.modoPreparo);
    setEditando(receita.id);
    setModalVisible(true);
  };

  const limparCampos = () => {
    setNome('');
    setIngredientes('');
    setModoPreparo('');
  };

  return {
    receitas, nome, ingredientes, modoPreparo, busca,
    setNome, setIngredientes, setModoPreparo, setBusca,
    adicionarReceita, atualizarReceita, excluirReceita,
    abrirModalEdicao, modalVisible, setModalVisible,
    editando, setEditando, limparCampos
  };
}