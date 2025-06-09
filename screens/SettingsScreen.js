import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../styles';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#f9d1cd' }]}>
      <Text style={styles.text}>Ajustes de la App</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50, marginBottom: 15 }}
      />
      <Button title="Ver Detalle Ajustes" onPress={() => navigation.navigate('SettingsDetail')} />
    </View>
  );
}
