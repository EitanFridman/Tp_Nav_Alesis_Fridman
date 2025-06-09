import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from '../styles';

export default function HomeDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#cde1f9' }]}>
      <Text style={styles.text}>Detalle de Home Screen</Text>
      <Image
        source={{ uri: 'https://m.media-amazon.com/images/I/61TGfufxpGL.jpg' }}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
}
