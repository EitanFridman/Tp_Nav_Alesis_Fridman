import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { styles } from '../styles';

export default function ContactScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, { backgroundColor: '#f9e2cd' }]}>
        <Text style={styles.text}>Ingrese su Nombre:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nombre"
        />
        <Text style={styles.text}>Ingrese su Teléfono:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          placeholder="Teléfono"
          keyboardType="phone-pad"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ContactDetail', { name, phone })}
        >
          <Text style={styles.buttonText}>Enviar Datos</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

