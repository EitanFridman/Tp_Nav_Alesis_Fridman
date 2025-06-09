import React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { styles } from '../styles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cde1f9' }]}>
      <Text style={styles.text}>Bienvenido a Home Screen</Text>
      <Image
        source={{ uri: 'https://blixtdev.com/content/images/2023/01/1-4bIsUtmfOQD45_2dt_Of5Q.png' }}
        style={{ width: '100%', height: '100%' }}
      />
      <Button
        title="Ir a Detalle Home"
        onPress={() => navigation.navigate('HomeDetail')}
      />
    </View>
  );
}
