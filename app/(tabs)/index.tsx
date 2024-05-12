import { StyleSheet, Image, Button, Alert, ScrollView} from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';






export default function TabOneScreen() {
  return (

    <ScrollView style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View>
        <Image
          style={{width: 400, height: 400}}
          source={require('@/assets/images/rest.jpg')}
        />
        <Button
          title="Produtos"
          onPress={() => Alert.alert('Botão pressionado')}
        />
      </View>
      <View>
        <Image
          style={{width: 400, height: 400, }}
          source={require('@/assets/images/prod.jpg')}
        />
        <Button
          title="Restaurantes"
          onPress={() => Alert.alert('Botão pressionado')}
        />
      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
});
