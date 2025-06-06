import * as React from 'react';
import { Button, TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen()
{
  return(

    <HomeStack.Navigator> 
      <HomeStack.Screen name = "Home" component={HomeScreen}/> 
      <HomeStack.Screen name = "Details" component={DetailsScreen}/> 

    </HomeStack.Navigator>
  )
}



function ProfileStackScreen()
{
  return(

    <ProfileStack.Navigator> 
      <ProfileStack.Screen name = "Profile" component={ProfileScreen}/> 
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <Tab.Navigator> 
        <Tab.Screen name = "HomeTab" component={HomeStackScreen} options={{ title: 'inicio' }}/>
         <Tab.Screen name = "ProfileTab" component={ProfileStackScreen} options={{ title: 'inicio' }}/>
      </Tab.Navigator>

    </NavigationContainer>
  )
}
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Pantalla Home</Text>
      <Button
        title="Ir a Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Pantalla Details</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Pantalla Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
