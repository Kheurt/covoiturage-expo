import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TripAlert } from '../../components/Index';
import { TripDetails } from '../../components/Index';
import { AlertForm } from '../../components/Index';
import Header from '../../layout/Header';

export const AddAlertScreen = ( {navigation} ) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <StatusBar hidden={true} />
            <AlertForm navigation={navigation}/>
        </ScrollView>
      </SafeAreaView>
      
    );
  }
  

export default AddAlertScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
