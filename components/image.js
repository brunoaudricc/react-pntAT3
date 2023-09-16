import { Text, View, StyleSheet, Image } from 'react-native';
import ('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>I Luv u</Text>
      <View style={styles.imagesContainer}>
        <Image style={styles.nyc} source={require('../assets/nyc.png')} />
        <Image style={styles.heart} source={require('../assets/heart.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#87CEEB',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Lobster',
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nyc: {
    width: 128, 
    height: 128, 
  },
  heart: {
    width: 90, 
    height: 90, 
  },
});
