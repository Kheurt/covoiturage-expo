import { StyleSheet, Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TripAlert } from '../../components/Index';
import { TripDetails } from '../../components/Index';

const HomeScreen = ( {navigation} ) => {
    return (
      <View style={styles.container}>
        {/* <View>
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        </View> */}
        <View>
          {/* <TripAlert /> */}
          <TripDetails />
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  