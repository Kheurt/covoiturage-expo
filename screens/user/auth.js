
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingScreen from '../profile/Settings';
import HomeScreen from '../home/HomeScreen';
import ProfileScreen from '../profile/Profile';
import { LoginScreen } from './Login'
import { RegistrationScreen } from './Register'

const Stack = createNativeStackNavigator();
function Navigator() {
    return ( 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
      </Stack.Navigator>
     );
}

const isSignedIn = true

export const auth =
isSignedIn ? (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </>
  ) : (
    <>
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegistrationScreen} />
    </>
  );