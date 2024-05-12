import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'react-native-axios';

export default function AtualizarProduto() {
  const [id, setId] = useState('');
  const [image, setImage] = useState(null);
  const [nome_produto, setNomeProduto] = useState("");
  const [valor, setValor] = useState("");
  const [qtd_estoque, setQtd_estoque] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [restaurante, setRestaurante] = useState("");

  const handleUpdate = async (id) => {
    let formfield = new FormData();

    formfield.append('nome_produto', nome_produto);
    formfield.append('valor', valor);
    formfield.append('qtd_estoque', qtd_estoque);
    formfield.append('descricao', descricao);
    formfield.append('categoria', categoria);
    formfield.append('restaurante', restaurante);

    try {
      await axios.put(`http://192.168.207.109:8000/produtos/${id}/`, formfield, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      });
      
      alert('Produto atualizado');
    } catch (error) {
      alert('Erro ao atualizar o produto', error);
    }
  }

  const handleSubmit = () => {
    handleUpdate(id);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Atualizar Produtos</Text>
        <TextInput
          style={styles.input}
          onChangeText={setId}
          value={id}
          placeholder="Insira o ID do produto que deseja alterar"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRestaurante}
          value={restaurante}
          placeholder="ID do restaurante que o produto está"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNomeProduto}
          value={nome_produto}
          placeholder="Nome do produto"
        />
        <TextInput
          style={styles.input}
          onChangeText={setValor}
          value={valor}
          placeholder="Valor"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setQtd_estoque}
          value={qtd_estoque}
          placeholder="Estoque"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setDescricao}
          value={descricao}
          placeholder="Descrição"
        />
        <TextInput
          style={styles.input}
          onChangeText={setCategoria}
          value={categoria}
          placeholder="Categoria"
        />
        <Button
          title="Alterar"
          onPress={handleSubmit}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
  }
});
