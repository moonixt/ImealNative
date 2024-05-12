import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'react-native-axios'

export default function AdicionarProduto() {
  const [image, setImage] = useState(null);
  const [nome_produto, setNomeProduto] = useState("");
  const [valor, setValor] = useState("");
  const [qtd_estoque, setQtd_estoque] = useState("");
  const [descricao, setDescricao] = useState("");
  const [restaurante, setRestaurante] = useState("");

  const handleSubmit = async () => {
    let formfield = new FormData();

    // Adicione suas validações aqui
    axios.post('http://192.168.207.109:8000/produtos/', {
  nome_produto: nome_produto,
  valor: valor,
  qtd_estoque: qtd_estoque,
  descricao: descricao,
  restaurante: restaurante,
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
  }

  


  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produtos</Text>
      <View style={styles.separator} />
      <TextInput
        style={styles.input}
        onChangeText={setNomeProduto}
        value={nome_produto}
        placeholder="Nome do Produto"
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
        placeholder="Quantidade em estoque"
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
        onChangeText={setRestaurante}
        value={restaurante}
        placeholder="Identidade do restaurante"
      />
      <Button
        title="Cadastrar-se"
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
  }
});
