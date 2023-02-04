import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet,Text, View, Image } from 'react-native';

import { styles } from "../../layout/Style";

function AlertItem ( {title, navigation} ){
    return(
      <View style={styles.alertBox}>
          <View>
             <Image source={require('../../assets/avatar-img.jpg')} style={styles.alertAvatar}/>
          </View>
          <Text style={styles.alertTitle}>{title||'Paul'}</Text>
          <View style={styles.alertActionBtn}>
            <FontAwesome 
            onPress={()=>{navigation.navigate("Alerts")}} 
            name="angle-right" size={40} style={styles.alertActionBtnIcon}
            />
          </View>
      </View>
    )
}

export default AlertItem;