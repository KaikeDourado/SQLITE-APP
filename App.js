import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import useReceitas from './hooks/useReceitas';
import ReceitaForm from './components/receitaForm';
import ReceitaList from './components/receitaList';

export default function App() {
  const {
    receitas, nome, ingredientes, modoPreparo, busca,
    setNome, setIngredientes, setModoPreparo, setBusca,
    adicionarReceita, atualizarReceita, excluirReceita,
    abrirModalEdicao, modalVisible, setModalVisible,
    editando, limparCampos
  } = useReceitas();

  const handleSubmit = () => {
    if (editando) atualizarReceita();
    else adicionarReceita();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
      <View style={{ padding: 16, backgroundColor: '#fff', borderBottomWidth: 1, borderColor: '#ddd' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Minhas Receitas</Text>
      </View>

      <ReceitaList
        receitas={receitas}
        busca={busca}
        setBusca={setBusca}
        abrirModalEdicao={abrirModalEdicao}
        excluirReceita={excluirReceita}
      />

      <TouchableOpacity
        onPress={() => {
          limparCampos();
          setModalVisible(true);
        }}
        style={{
          backgroundColor: '#28a745',
          padding: 16,
          borderRadius: 50,
          position: 'absolute',
          right: 20,
          bottom: 30,
          elevation: 4
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>+</Text>
      </TouchableOpacity>

      <ReceitaForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        nome={nome}
        ingredientes={ingredientes}
        modoPreparo={modoPreparo}
        setNome={setNome}
        setIngredientes={setIngredientes}
        setModoPreparo={setModoPreparo}
        onSubmit={handleSubmit}
        editando={editando}
      />
    </SafeAreaView>
  );
}