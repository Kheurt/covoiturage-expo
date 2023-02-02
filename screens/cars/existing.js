import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet,Text, View, Image } from 'react-native';
function Existing (){
    return(
      <View style={styles.box1}>
          <View>
             <Image source={require('../../assets/profilImg.png')} style={styles.circle1}/>
          </View>
          <Text style={styles.name}>Paul</Text>
          <View style={styles.circle2}><FontAwesome name="angle-right" size={40} style={styles.icon1}/></View>
      </View>
    )
}

export default Existing;

const styles = StyleSheet.create({
    box1:{
      margin: 15,
      marginTop:47,
      border: 2,
      borderRadius: 29,
      height: 100,
      width: 360,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop:30,
      padding:20,
    },
    circle1:{
        width: 45,
        height:45,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
    },
    circle2:{
        width: 45,
        height:45,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
        backgroundColor:'#F6623E',
    },
    name:{
       fontSize:20,
       marginLeft:-150,
    },
    icon1:{
       marginLeft:15,
       color:'white',
    },


})