import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CriterioCard from '../components/CriterioCard';

export default function CriarRubrica() {
 
  const [listaCriterios, setListaCriterios] = useState([
    { id: Math.random().toString() } 
  ]);

  
  const adicionarCriterio = () => {
    const novoCriterio = { id: Math.random().toString() };
    setListaCriterios([...listaCriterios, novoCriterio]);
  };
  const removerCriterio = (id) => {
  setListaCriterios(listaCriterios.filter(item => item.id !== id));
};

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titulo}>Criar Rubrica</Text>
        <Text style={styles.subtitulo}>DESIGN DE AVALIAÇÃO DIGITAL</Text>

        <View style={styles.cardInput}>
          <Text style={styles.labelInput}>TÍTULO DA RUBRICA</Text>
          <View style={styles.inputBackground}>
            <TextInput 
              style={styles.input}
              placeholder="ex: Análise de Escrita Criativa - Semestre 1"
              placeholderTextColor="#A0A0B0"
            />
          </View>
        </View>
      </View>

      
      {listaCriterios.map((item) => (
    <CriterioCard 
    key={item.id} 
    onDelete={() => removerCriterio(item.id)} 
  />
))}

     
      <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarCriterio}>
        <Ionicons name="add-circle-outline" size={24} color="#A0A0B0" />
        <Text style={styles.textoAdicionar}>Adicionar Critério</Text>
      </TouchableOpacity>

      
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F8FAFF',
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 12,
    color: '#636E72',
    letterSpacing: 1.5,
    marginBottom: 30,
  },
  cardInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  labelInput: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#3F51B5', // Ajustei para o azul do design
    marginBottom: 10,
  },
  inputBackground: {
    backgroundColor: '#F0F2F8',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  input: {
    fontSize: 15,
    color: '#2D3436',
  },
  botaoAdicionar: {
    marginHorizontal: 20,
    marginTop: 20,
    height: 60,
    borderWidth: 2,
    borderColor: '#D1D8E0',
    borderStyle: 'dashed', // Estilo tracejado da imagem
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoAdicionar: {
    marginLeft: 10,
    color: '#A0A0B0',
    fontWeight: '600',
  }
});