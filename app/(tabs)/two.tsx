import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView  } from 'react-native';
import axios from 'react-native-axios';

export default function TabTwoScreen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.207.109:8000/produtos/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {data && data.map((produto) => (
        <View key={produto.id} style={styles.produto}>
          <Image
            style={{width: 190, height: 150, paddingLeft: 20, paddingTop: 20}}
            source={{uri: produto.image}}
          />
          <Text style={styles.produtoNome}>{produto.nome_produto}</Text>
          <Text style={styles.produtoPreco}>Preço: R$ {produto.valor}</Text>
          <Text>Restaurante: {produto.nome_restaurante}</Text>
          <Text style={styles.produtoRestaurante}>Identidade de restaurante: {produto.restaurante}</Text>
          <Text style={styles.produtoCodigo}>Código do produto: {produto.id}</Text>
        </View>
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  produto: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  produtoNome: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  produtoPreco: {
    color: 'green',
  },
  produtoRestaurante: {
    fontWeight: 'bold',
  },
  produtoCodigo: {
    color: 'orange',
  },
});
