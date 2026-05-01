import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

export default function CriterioCard({ onDelete }) {
  // 1. Estados para a lógica do Front
  const [peso, setPeso] = useState(8.5);
  const [nivel, setNivel] = useState('Bom');

  return (
    <View style={styles.card}>
      {/* Cabeçalho do Card */}
      <View style={styles.row}>
        <View>
          <Text style={styles.labelHeader}>NOME DO CRITÉRIO</Text>
          <Text style={styles.tituloCriterio}>Clareza de argumento</Text>
        </View>
       <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-outline" size={20} color="#CCC" />
        </TouchableOpacity>
      </View>

      {/* Seção do Slider (Peso) */}
      <View style={[styles.row, { marginTop: 20 }]}>
        <Text style={styles.label}>PESO</Text>
        <Text style={styles.valorPeso}>{peso.toFixed(1)}</Text>
      </View>
      
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={0}
        maximumValue={10}
        step={0.1}
        value={peso}
        onValueChange={(valor) => setPeso(valor)} // Atualiza o número em tempo real
        minimumTrackTintColor="#5B58AD"
        maximumTrackTintColor="#E0E0E0"
        thumbTintColor="#5B58AD"
      />

      {/* Seção de Seleção de Nível */}
      <Text style={[styles.label, { marginTop: 10 }]}>NÍVEIS DE DESEMPENHO</Text>
      <View style={styles.containerNiveis}>
        {['Excelente', 'Bom', 'Precisa melhorar'].map((item) => (
          <TouchableOpacity 
            key={item}
            onPress={() => setNivel(item)} // Define qual nível está ativo
            style={[
              styles.botaoNivel, 
              nivel === item && styles.botaoAtivo // Se for o selecionado, aplica estilo extra
            ]}
          >
            <Text style={[styles.textoNivel, nivel === item && styles.textoAtivo]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  labelHeader: { fontSize: 10, color: '#AAA', fontWeight: 'bold' },
  tituloCriterio: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  label: { fontSize: 12, color: '#AAA', fontWeight: 'bold' },
  valorPeso: { fontSize: 22, fontWeight: 'bold', color: '#5B58AD' },
  containerNiveis: { 
    flexDirection: 'row', 
    backgroundColor: '#F0F2F5', 
    borderRadius: 10, 
    padding: 5, 
    marginTop: 10 
  },
  botaoNivel: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 8 },
  botaoAtivo: { backgroundColor: '#FFF', elevation: 2 },
  textoNivel: { fontSize: 11, color: '#888' },
  textoAtivo: { color: '#5B58AD', fontWeight: 'bold' }
});