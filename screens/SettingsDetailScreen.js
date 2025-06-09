import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export default function SettingsDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#f9d1cd' }]}>
      <Text style={styles.text}>Detalle de Ajustes</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
