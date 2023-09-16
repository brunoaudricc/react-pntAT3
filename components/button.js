import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import ('https://fonts.googleapis.com/css2?family=Qwigley&display=swap')
const App = () => {
  const [buttonText, setButtonText] = useState('Pressione o botão');

  const handleButtonPress = () => {
    setButtonText('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{buttonText}</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Pressione-me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Qwigley',
    color: '#6A5ACD',
  },
  button: {
    backgroundColor: '#000080',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
