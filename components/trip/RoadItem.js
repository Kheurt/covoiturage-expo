import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet,Text, View, Image } from 'react-native';

function TripItem ( props ){
    return(
        <View style={styles.box}>
        <Text style={styles.name}>Departure</Text>
        <Text style={styles.name}>{props.departure || "Yaoundé Mendong"}</Text>
        <Text style={styles.name}>Destination</Text>
        <Text style={styles.name}>{props.destination || "Yaoundé Melen"}</Text>
        <Text style={styles.name}>{props.date || "10/02/2023"}</Text>
        <View style={styles.circle}><FontAwesome name="angle-right" size={40} style={styles.icon}/></View>
        <View>
          <Text style={styles.name}>{props.title || "Paul"}</Text>
           <Image source={require('../../assets/avatar-img.jpg')} style={styles.avatar}/>
           <Text style={styles.name}>{props.title || "5000F"}</Text>
           <Text style={styles.name}>{props.title || "Audi (3760-5423)"}</Text>
        </View>
    </View>
    )
}

export function TripItemV2 ( props ){
    return(
        <View style={styles.box}>
        <Text style={styles.name}>Departure</Text>
        <Text style={styles.name}>{props.departure || "Yaoundé Mendong"}</Text>
        <Text style={styles.name}>Destination</Text>
        <Text style={styles.name}>{props.destination || "Yaoundé Melen"}</Text>
        <Text style={styles.name}>{props.date || "10/02/2023"}</Text>
        <View style={styles.circle}><FontAwesome name="angle-right" size={40} style={styles.icon}/></View>
        <View>
            <View style={styles.circle}><FontAwesome name="angle-right" size={40} style={styles.icon}/></View>
        </View>
    </View>
    )
}

export function TripItemV3 ( props ){
    return(
        <>
            <View style={styles.box}>
                <Text style={styles.name}>{props.date || "10/02/2023"}</Text>
                <Text style={styles.name}>{props.date || "01"}</Text>
                <TripItemV2 />
            </View>
        </>
    )
}


export default TripItem;

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