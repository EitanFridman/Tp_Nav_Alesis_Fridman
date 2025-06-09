
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import HomeDetailScreen from './screens/HomeDetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileDetailScreen from './screens/ProfileDetailScreen';
import SettingsScreen from './screens/SettingsScreen';
import SettingsDetailScreen from './screens/SettingsDetailScreen';
import ContactScreen from './screens/ContactScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: 'Detalle Home' }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: 'Perfil' }} />
      <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: 'Detalle Perfil' }} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsMain" component={SettingsScreen} options={{ title: 'Configuración' }} />
      <Stack.Screen name="SettingsDetail" component={SettingsDetailScreen} options={{ title: 'Detalle Config' }} />
    </Stack.Navigator>
  );
}

function ContactStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactMain" component={ContactScreen} options={{ title: 'Contacto' }} />
      <Stack.Screen name="ContactDetail" component={ContactDetailScreen} options={{ title: 'Detalle Contacto' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // para ocultar header en tabs y usar solo el stack
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'call' : 'call-outline';
            }

            // Return the icon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
        <Tab.Screen name="Contact" component={ContactStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
