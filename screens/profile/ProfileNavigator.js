
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../profile/Profile';
import SettingScreen from '../profile/Settings';

fontawesome.library.add(faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars);

const Stack = createNativeStackNavigator();

export const ProfileNavigator = () => {
    return ( 
      <Stack.Navigator initialRouteName="Heme">
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false, }}/>
        <Stack.Screen name="Settings" component={SettingScreen} options={{ headerShown:false, }}/>
      </Stack.Navigator>
     );
}

