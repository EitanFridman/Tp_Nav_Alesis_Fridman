import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export default function ContactDetailScreen({ route, navigation }) {
  const { name, phone } = route.params;

  return (
    <View style={[styles.container, { backgroundColor: '#f9e2cd' }]}>
      <Text style={styles.text}>Nombre: {name}</Text>
      <Text style={styles.text}>Teléfono: {phone}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
