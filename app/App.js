import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const imagePath = require('./assets/logo.jpg')
  const Bold = (props) => 
    <Text style={styles.bold} >{props.children}</Text>

  return (
    <View style={styles.container}>
      <Image source={imagePath} style={styles.image}/>
      <Text style={styles.test}>
        <Bold>Cool</Bold>-Working
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 120,
    width: 120,
    borderRadius: 20,
    marginBottom: 12
  },

  bold: {
    fontWeight: 'bold'
  },

  test: {
    fontSize: 18,
    color: '#fff'
  }
});
