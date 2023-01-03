import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Frontlist from './components/frontlist';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Frontlist></Frontlist>
      <StatusBar style="auto" />
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
