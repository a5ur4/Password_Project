import { SafeAreaView, StyleSheet } from 'react-native';

import PasswordGenerator from './src/components/Generator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PasswordGenerator/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    backgroundColor: '#0F0E0F'
  },
})