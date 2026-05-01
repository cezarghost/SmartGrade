import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CriarRubrica from './src/pages/CriarRubrica'; 

export default function App() {
  return (
    <View style={styles.container}>
      <CriarRubrica />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o app ocupar a tela inteira
    backgroundColor: '#F8FAFF', 
  },
});