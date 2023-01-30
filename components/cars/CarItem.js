import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet,Text, View, Image } from 'react-native';

export function CarItem ( {name, places} ){
    return(
      <View style={styles.box}>
          <View>
             <Image source={require('../../assets/avatar-img.jpg')} style={styles.avatar}/>
          </View>
          <Text style={styles.name}>{name || "Cristler 2008"}</Text>
          <Text style={styles.name}>{places || 10} places</Text>
          <View style={styles.circle}><FontAwesome name="angle-right" size={40} style={styles.icon}/></View>
      </View>
    )
}

export function CarItemV2 ( {name, places} ){
    return(
      <View style={styles.box}>
          <View>
             <Image source={require('../../assets/avatar-img.jpg')} style={styles.avatar}/>
          </View>
          <Text style={styles.name}>{name || "Crisler 2008"} - {places || 10} places</Text>
          <Text style={styles.name}></Text>
          <View style={styles.circle}><FontAwesome name="angle-right" size={40} style={styles.icon}/></View>
      </View>
    )
}



const styles = StyleSheet.create({
    box:{
      margin: 15,
      marginTop:47,
      border: 2,
      borderRadius: 29,
      height: 100,
      width: 360,
      backgroundColor: '#D5E3FF',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop:30,
      padding:20,
    },
    avatar:{
        width: 45,
        height:45,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
    },
    circle:{
        width: 45,
        height:45,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
        backgroundColor:'rgba(84, 91, 253, 1)',
    },
    name:{
       fontSize:20,
       marginLeft:-150,
    },
    icon:{
       marginLeft:15,
       color:'white',
    },


})