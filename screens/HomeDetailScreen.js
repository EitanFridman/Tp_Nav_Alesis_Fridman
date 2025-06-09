import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export default function HomeDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cde1f9' }]}>
      <Text style={styles.text}>Detalle de Home Screen</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
