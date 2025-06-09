import React from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from '../styles';

export default function SettingsScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#f9d1cd' }]}>
      <Text style={styles.text}>Ajustes de la App</Text>
      <Button title="Ver Detalle Ajustes" onPress={() => navigation.navigate('SettingsDetail')} />
    </View>
  );
}
