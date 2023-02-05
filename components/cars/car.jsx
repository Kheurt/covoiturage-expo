import React from "react";
import { StyleSheet,Text, View, Image, TouchableOpacity, Button } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { CarsDATA } from "./CarsData";
import { styles } from "../../layout/Style";

export const CarItem = ( {carData, navigation} ) => {

  return(
    <View style={styles.alertBox}>
        <View>
           <Image source={require('../../assets/avatar-img.jpg')} style={styles.alertAvatar}/>
        </View>
        <Text style={styles.alertTitle}>{carData.title||'Toyota Camri'}</Text>
        <TouchableOpacity
          onPress={()=>{navigation.navigate("CarDetails", {...carData})}} 
        >
          <View style={styles.alertActionBtn}>
              <FontAwesome name="angle-right" size={40} style={styles.alertActionBtnIcon}/>
          </View>
        </TouchableOpacity>
    </View>
  )
}

export const CarDetails = (props) => {
  const details = props?.details
  console.warn("details", details)
  return ( 
      <View style={styl.blockDetails}>
          <View style={styl.block}>
              <Text style={styl.blockTitle}>Immatriculation</Text>
              <Text style={styl.blockSubTitle}>{details.registration || 'CE 827 CW'}</Text>
          </View>
          <View style={styl.block}>
              <Text style={styl.blockTitle}>Nom</Text>
              <Text style={styl.blockSubTitle}>{details.destination || 'Prodo TX 237'}</Text>
          </View>
          <View style={styl.block}>
              <Text style={styl.blockTitle}>Type de moteur</Text>
              <Text style={styl.blockSubTitle}>{details.motor_type || 'Diesel'}</Text>
          </View>
          <View style={styl.block}>
              <Text style={styl.blockTitle}>Marque</Text>
              <Text style={styl.blockSubTitle}>{details.car_brand || 'Toyota'}</Text>
          </View>
          <View style={styl.block}>
              <Text style={styl.blockTitle}>Nombre de places</Text>
              <Text style={styl.blockSubTitle}>{details.nbr_places || 10} places</Text>
          </View>
          <View style={styl.block}>
              <Text style={styl.blockTitle}>Description</Text>
              <Text style={styl.description}>{details.description || "Texte de description Lorem"} places</Text>
          </View>
          <Button title="Modifier" />
      </View>
   );
}


export const Cars = ({CarsDATA}) => {
    const renderItem = ({ item }) => (
        <CarItem shortname={item.shortname} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={CarsDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      );
}

const styl = StyleSheet.create({
  description:{
    //height:8,
    width:300,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    margin: -1
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
  
  button:{
    width:120,
    height:40,
    backgroundColor:'rgba(225, 125, 75, 1)',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(225, 125, 75, 1)',
    borderWidth:1,
    marginTop:45,
    marginLeft:250,
  },
  buttonText:{
    fontSize:26,
    color: 'white',
  },
  list:{
    fontSize:26,
    // fontVariant: 'bold'
    fontStyle: 'bold',
    margin:19,
  },

  block: {
    flex: 1,
    flexDirection: 'colums',
    backgroundColor: '#FFFFFF',
    alignItems: 'left',
    justifyContent: 'center',
    borderWidth:0,
    paddingLeft:30,
    // borderColor: "#fff",
  },
blockDetails:{
    paddingTop:15,
    height:465,
    borderRadius:20,
    width:365,
    marginLeft:10,
    backgroundColor: '#FFFFFF',
},
blockTitle: {
  flex: 1,
  flexDirection: 'row',
//   backgroundColor: '#fff',
  alignItems: 'left',
  justifyContent: 'center',
  color:'#A4A4B2'
},
blockSubTitle: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
back: {
  backgroundColor: '#D5E3FF',
  paddingBottom:10,
},
headerimg:{
  marginLeft:33,
},
headertxt:{
  marginTop:-95,
  color:'#fff',
  fontWeight: "bold",
  fontSize:25,
  marginLeft: 50,
},
headertxt1:{
  marginTop:65,
  marginLeft:40,
  fontSize:15,
  fontWeight:'bold'
},
reducespace:{
  columnGap:1,
},
headerimg1:{
  width:180,
  height:100,
  marginTop:150,
  marginLeft:95,
},
inputhome:{
  borderBottomWidth: 0.5,
  borderBottomColor: "black",
  marginLeft:50,
  marginRight:40,
  marginTop:30,
  flexDirection:"row",
  
},
Homeimage:{
  marginTop:70,
  marginLeft:30,
},
circle3:{
  width: 60,
  height:60,
  backgroundColor: '#FF7D4B',
  borderWidth: 2,
  borderRadius: 30,
  borderColor: 0,
  marginTop: 50,
  marginLeft:300,
},
arrowhome:{
  marginTop:15,
  marginLeft:15,
},
iconhome:{
  marginRight: 10,
},
Homeimage1:{
  marginTop:180,
  marginLeft:30,
},
text1:{
  fontSize: 34,
  fontWeight: '700',
  marginLeft:20,
  marginTop:10,
},
text2:{
  color:'grey',
  marginLeft:20,
  marginTop:10,
},
text3:{
  textAlign:"center",
  fontWeight:"bold",
  marginTop:30,
},
btn:{
    width:120,
    height:40,
    backgroundColor:'#FF7D4B',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FF7D4B',
    borderWidth:1,
},
btnTxt:{
  // fontSize:26,
  color: "white",
  fontWeight:"bold",
},
buttoncontainer:{
   flexDirection:"row",
   justifyContent:"space-between",
   margin:20,
},

});