import { StatusBar } from 'expo-status-bar';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from './screens/user/Login'
import { RegistrationScreen } from './screens/user/Register'
import { PlannerNavigatorTabs } from './screens/home/planner/PlannerNavigator';
// import { PassengerNavigatorTabs } from './screens/home/passenger/PassengerNavigator';
import { OnBoardScreen } from './screens/splash/OnBoarding-step-1';
import { OnBoardingScreen } from './screens/splash/OnBoarding-step-2';

fontawesome.library.add(faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  return ( 
    <Stack.Navigator initialRouteName="OnBoard">
      <Stack.Screen name="OnBoard" component={OnBoardScreen} options={{ headerShown:false, }}/>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} options={{ headerShown:false, }}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown:false, }}/>
      <Stack.Screen name="Register" component={RegistrationScreen} options={{ headerShown:false, }}/>
      <Stack.Screen name="LetsGoPlanner" component={PlannerNavigatorTabs} options={{ headerShown:false, }}/>
      {/* <Stack.Screen name="LetsGoPassenger" component={PassengerNavigatorTabs} options={{ headerShown:false, }}/> */}
    </Stack.Navigator>
   );
}


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarView: {
    //
    flexDirection: 'row',
    padding: 20,
    paddingBottom: 40,
    paddingLeft: 50,
    //
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#dcc'
  }
});

