import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Load from './views/Load';

export default function App() {
  return (
    <View style={styles.container}>
      <Load />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
