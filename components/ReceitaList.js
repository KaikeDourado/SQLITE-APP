import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, variant }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      padding: 10,
      backgroundColor: variant === 'destructive' ? '#ff3b30' : '#007AFF',
      borderRadius: 6,
      marginRight: variant === 'destructive' ? 0 : 8,
      marginTop: 8
    }}
  >
    <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>{children}</Text>
  </TouchableOpacity>
);

export default function ReceitaList({ receitas, busca, setBusca, abrirModalEdicao, excluirReceita }) {
  const receitasFiltradas = receitas.filter(r => r.nome.toLowerCase().includes(busca.toLowerCase()));

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Buscar receita..."
        value={busca}
        onChangeText={setBusca}
        style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, marginBottom: 16 }}
      />

      <FlatList
        data={receitasFiltradas}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>{item.nome}</Text>
            <Text style={{ marginBottom: 4 }}>Ingredientes: {item.ingredientes}</Text>
            <Text style={{ marginBottom: 8 }}>Modo de preparo: {item.modoPreparo}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button onPress={() => abrirModalEdicao(item)}>Editar</Button>
              <Button variant="destructive" onPress={() => excluirReceita(item.id)}>Excluir</Button>
            </View>
          </View>
        )}
      />
    </View>
  );
}
