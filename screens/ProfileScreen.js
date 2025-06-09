import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../styles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#d1f9cd' }]}>
      <Text style={styles.text}>Perfil de Usuario</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50, marginBottom: 15 }}
      />
      <Button title="Ver Detalle Perfil" onPress={() => navigation.navigate('ProfileDetail')} />
    </View>
  );
}
