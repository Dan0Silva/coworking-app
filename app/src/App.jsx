import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Load from './pages/Load/Index';
import Login from './pages/Login/Index';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Load />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214'
  }
});
