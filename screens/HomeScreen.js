import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cde1f9' }]}>
      <Text style={styles.text}>Bienvenido a Home Screen</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50, marginBottom: 15 }}
      />
      <Button
        title="Ir a Detalle Home"
        onPress={() => navigation.navigate('HomeDetail')}
      />
    </View>
  );
}
