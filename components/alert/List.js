import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View } from "react-native";
import AlertItem from './AlertItem';



function AlertList (){
    return(
        <View style={styles.container}>
            <View style={styles.head1}>
               <View style={styles.circle1}><FontAwesomeIcon name="angle-left" size={48} style={styles.icon1}/></View>
               <View>
                   <Image source={require('../../assets/avatar-img.jpg')} style={styles.circle2}/>
               </View>
           </View>
            <AlertItem/>
            <AlertItem/>
            <AlertItem/>
            <AlertItem/>
            <AlertItem/>
        </View>
    )
}

export default AlertList;