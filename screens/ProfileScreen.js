import React from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from '../styles';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#d1f9cd' }]}>
      <Text style={styles.text}>Perfil de Usuario</Text>
      <Button title="Ver Detalle Perfil" onPress={() => navigation.navigate('ProfileDetail')} />
    </View>
  );
}
