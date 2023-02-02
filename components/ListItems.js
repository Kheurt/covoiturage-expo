import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet,Text, View, Image } from 'react-native';

function ListRowItem ({text, screenName, navigation}){
    return(
      <View style={styles.box1}>
          <Text style={styles.name}>{ props.text | text | 'Paul' }</Text>
          <View
            style={styles.circle2}><FontAwesome name="angle-right" size={40} style={styles.icon1}
            onPress={()=>{navigation.navigate(screenName)}}
          /></View>
      </View>
    )
}

export default ListRowItem;

const styles = StyleSheet.create({
    box1:{
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
        backgroundColor:'rgba(84, 91, 253, 1)',
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