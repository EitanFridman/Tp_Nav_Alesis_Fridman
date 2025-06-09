import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles';

export default function ProfileDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#d1f9cd' }]}>
      <Text style={styles.text}>Detalle del Perfil</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
