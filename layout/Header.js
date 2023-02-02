import { View, Image, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars);

function Header( {screenTitle, menu, search, navigation} ) {
    return (
        <View> 
            <View style={styles.head}>
                <View style={styles.backCircle}>
                  {/* Menus widget or back button */}
                  { menu ? <FontAwesomeIcon icon="fa-solid fa-bars" size={36} onPress={()=>{navigation.navigate("Menu")}} style={styles.icon}/>
                      : <FontAwesome name="angle-left" size={48} onPress={()=>{navigation.goBack()}} style={styles.icon}/>
                  }
                  
                </View>
                { search ? <View></View> : <View></View>  }

                <View>
                    <Image source={require('../assets/avatar-img.jpg')} style={styles.avatar}/>
                </View>
            </View>
            <Text style={styles.itemText}> {screenTitle} </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(245, 245, 245, 1)',
    },
    head:{
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
    backCircle:{
        width: 60,
        height:60,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
        //display: "flex",
        //flex: 1,
        //justifyContent: 'center'
    },
    icon:{
        marginLeft:12,
        marginTop:5,
    },
    avatar:{
      width: 60,
      height:60,
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 0,
      marginRight:25,
    },
    itemText:{
      textAlign: 'center',
      fontSize:34,
      fontWeight: 'bold',
      marginBottom:20,
    },
});
  

export default Header;