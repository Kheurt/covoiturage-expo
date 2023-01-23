import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Navigator() {
    return ( 
      <Stack.Navigator>
        {/* <Stack.Screen name="ScreenName" component={ScreenComponent} /> */}
      </Stack.Navigator>
    );
}

export function Screen() {
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