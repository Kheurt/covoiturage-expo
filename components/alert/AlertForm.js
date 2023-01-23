import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Image } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlertInput from './AlertInput';
import AlertItem from './AlertItem';
// import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Header } from '../../layout/Index'


export default function AlertForm() {
  return ( 
    <View style={styles.container}>
      <View style={styles.container1}>

        <Header screenTitle={"New Alert"} />
        
        <AlertInput text={'Departure'} icon={"fa-solid fa-circle-dot"}/>
        <AlertInput text={'Destination'} icon={"fa-solid fa-location-dot"}/>
        <AlertInput text={'Date'} icon={"fa-solid fa-calendar-days"}/>
        <AlertInput text={'Schedule'} icon={"fa-solid fa-clock"} />
        <AlertInput text={'Number of Places'} icon={"fa-solid fa-user"}/>
        <AlertInput text={'Budget'} icon={"fa-solid fa-money-bill"}/>

        <View style={styles.send}>
          <Text style={styles.sendText}>send</Text>
        </View>
        
        <Text style={styles.list}>List of existing alerts </Text>
      </View>
      <AlertItem/>
    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 1)',
  },
  container1:{
    backgroundColor: '#D5E3FF',
    height:619,
    marginTop:1,
    borderRadius:30,
    
  },
  head1:{
    backgroundColor: '#D5E3FF',
    borderRadius: 20,
    border: 1,
    width:380,
    height: 60,
    marginTop:90,
    marginLeft:16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle1:{
      width: 60,
      height:60,
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 0,
  },
  icon1:{
      marginLeft:18,
      marginTop:5,
  },
  circle2:{
    width: 60,
    height:60,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 0,
    marginRight:25,
  },
  itemText:{
    // fontFamily: 'Sans-serif',
    textAlign: 'center',
    fontSize:34,
    fontWeight: 'bold',
    marginBottom:20,
    // fontFamily:'MontserratAlternates',
  },
  
  
  send:{
    width:120,
    height:40,
    backgroundColor:'rgba(84, 91, 253, 1)',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(84, 91, 253, 1)',
    borderWidth:1,
    marginTop:45,
    marginLeft:250,
  },
  sendText:{
    
    fontSize:26,
    color: 'white',
  },
  list:{
    fontSize:26,
    // fontVariant: 'bold'
    fontStyle: 'bold',
    margin:19,
  },

});
