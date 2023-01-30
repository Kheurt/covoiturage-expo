import React from "react";
import { View, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

function SettingScreen( {navigation} ) {
    return ( 
    <View>
        <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View> 
    );
}

export default SettingScreen;