import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TripAlert } from '../../components/Index';
import { TripDetails } from '../../components/Index';
import { AlertForm } from '../../components/Index';
import Header from '../../layout/Header';

const HomeScreen = ( {navigation} ) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {/* <View style={styles.container}> */}
            {/* <Header /> */}
            {/* <View> */}
              {/* <TripAlert /> */}
              {/* <TripDetails /> */}
              <AlertForm navigation={navigation}/>
            {/* </View> */}
            {/* <StatusBar style="auto" /> */}
          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
      
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
  