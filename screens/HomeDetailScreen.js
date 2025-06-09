import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../styles';

export default function HomeDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cde1f9' }]}>
      <Text style={styles.text}>Detalle de Home Screen</Text>
      <Image
        source={{ uri: 'https://blixtdev.com/content/images/2023/01/1-4bIsUtmfOQD45_2dt_Of5Q.png' }}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}

