import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../styles';

export default function SettingsDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#f9d1cd' }]}>
      <Text style={styles.text}>Detalle de Ajustes</Text>
      <Image
        source={{ uri: 'https://img.freepik.com/fotos-premium/programador-masculino-joven-loco-gafas-nerd-mirando-camara-detras-teclado-computadora-contra-fondo-gris_251859-4464.jpg' }}
        style={{ width: '100%', height: '50%' }}
      />
    </View>
  );
}
