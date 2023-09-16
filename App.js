import { Text, SafeAreaView, StyleSheet } from 'react-native';
import ('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');
import { Card } from 'react-native-paper';

import AssetExample from './components/image';
import Botao from './components/button';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        I LOVE NYC❤
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Card>
        <Botao />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#87CEEB',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00008B',
    fontFamily: 'Amatic SC',
  },
});
