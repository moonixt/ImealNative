import React, { useState } from 'react'
import axios from 'react-native-axios'
import { View, Text, TextInput, Button, Alert } from 'react-native'

const DeletarProduto = () => {
  const [id, setId] = useState('')

  const handleDelete = async () => {
    try {
      await axios.delete(`http://192.168.207.109:8000/produtos/${id}/`)
      Alert.alert('Produto excluído')
    } catch (error) {
      Alert.alert('Erro ao excluir o produto', error)
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Insira o ID"
        value={id}
        onChangeText={text => setId(text)}
      />
      <Button title='Deletar Produto' onPress={handleDelete} />
    </View>
  )
}

export default DeletarProduto
