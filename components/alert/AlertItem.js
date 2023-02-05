import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet,Text, View, Image, TouchableOpacity } from 'react-native';

import { styles } from "../../layout/Style";

function AlertItem ( {alertData, navigation} ){

    return(
      <View style={styles.alertBox}>
          <View>
             <Image source={require('../../assets/avatar-img.jpg')} style={styles.alertAvatar}/>
          </View>
          <Text style={styles.alertTitle}>{alertData.title||'Paul'}</Text>
          <TouchableOpacity
            onPress={()=>{navigation.navigate("AlertDetails", {...alertData})}} 
          >
            <View style={styles.alertActionBtn}>
                <FontAwesome name="angle-right" size={40} style={styles.alertActionBtnIcon}/>
            </View>
          </TouchableOpacity>
      </View>
    )
}

export default AlertItem;