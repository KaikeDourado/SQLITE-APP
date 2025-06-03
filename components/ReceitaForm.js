import React from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children, variant }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      padding: 10,
      backgroundColor: variant === 'outline' ? '#ccc' : '#007AFF',
      borderRadius: 5,
      marginBottom: 8
    }}
  >
    <Text style={{ color: variant === 'outline' ? '#333' : '#fff', textAlign: 'center' }}>
      {children}
    </Text>
  </TouchableOpacity>
);

export default function ReceitaForm({
  visible, onClose, nome, ingredientes, modoPreparo,
  setNome, setIngredientes, setModoPreparo,
  onSubmit, editando
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1, backgroundColor: '#fff', padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>
          {editando ? 'Editar Receita' : 'Nova Receita'}
        </Text>

        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, marginBottom: 8 }}
        />

        <TextInput
          placeholder="Ingredientes"
          value={ingredientes}
          onChangeText={setIngredientes}
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, marginBottom: 8 }}
        />

        <TextInput
          placeholder="Modo de Preparo"
          value={modoPreparo}
          onChangeText={setModoPreparo}
          multiline
          style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 8, marginBottom: 16 }}
        />

        <Button onPress={onSubmit}>
          {editando ? 'Salvar Alterações' : 'Adicionar Receita'}
        </Button>
        <Button onPress={onClose} variant="outline">
          Cancelar
        </Button>
      </View>
    </Modal>
  );
}
