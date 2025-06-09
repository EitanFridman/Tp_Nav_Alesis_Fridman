import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../styles';

export default function ProfileDetailScreen({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#d1f9cd' }]}>
      <Text style={styles.text}>Detalle del Perfil</Text>
      <Text> 3. Nunca te rindas, lo bueno está por llegar
        Cuando luchamos por lo que amamos, nuestras emociones están a flor de piel.
      </Text>

      <Text> 4. Pensando en mi felicidad, me acordé de ti
        Una reflexión emotiva sobre la persona a la que amamos. En el amor se sienten las emociones más intensas.
      </Text>

      <Text>  5. En un gran corazón hay espacio para todo, y en un corazón vacío no hay espacio para nada
        Antonio Porchia, sobre cómo existen corazones inmensos y corazones faltos de amor.
      </Text>

      <Text>  6. Imposible es una palabra que se encuentra solo en el diccionario de los necios
        Una frase que puede hacerte sentir emociones positivas. Ideal para los momentos difíciles.
      </Text>
    </View>
  );
}
