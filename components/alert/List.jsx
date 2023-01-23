import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View } from "react-native";
import Existing from './components/alert/existing';



function List (){
    return(
        <View style={styles.container}>
             <View style={styles.head1}>
                <View style={styles.circle1}><FontAwesomeIcon name="angle-left" size={48} style={styles.icon1}/></View>
                <View>
                    <Image source={require('./assets/img/img1.jpg')} style={styles.circle2}/>
                </View>
           </View>
            <Existing/>
            <Existing/>
            <Existing/>
            <Existing/>
            <Existing/>
        </View>
    )
}

export default List;