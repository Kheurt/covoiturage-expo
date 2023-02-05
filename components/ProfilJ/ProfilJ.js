import React from 'react';
import { View,Text, Image,StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// import { Container } from './styles';

const ProfilWidget = ({notification, navigation}) => {
  const diplayNotif = notification > 0 ?<TouchableOpacity><MaterialCommunityIcons name="bell" size={24} color="gray" /></TouchableOpacity>  : ""
  return (
    <View style={styles.container}>
      {diplayNotif}
      <TouchableOpacity onPress={()=>navigation.navigate("ProfileSettings")}>
        <Image 
          style={styles.profilImg}
          source = {require("../../assets/profil.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row"
  },
  profilImg:{
    width:30,
    height:30,
    borderRadius:100000000000,
    marginLeft:10
  }
});

export default ProfilWidget;