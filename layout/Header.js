import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import ProfilWidget from '../components/ProfilJ/ProfilJ';
import { Octicons,MaterialCommunityIcons } from '@expo/vector-icons';
import MenuNav from '../components/Nav/Nav';
import { styles } from './Style';

fontawesome.library.add(faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars);

function FirstHeader( {screenTitle, menu, search, navigation} ) {
    return (
        <View> 
            <View style={styles.head}>
                <View style={styles.backCircle}>
                  {/* Menus widget or back button */}
                  { menu ? <FontAwesomeIcon icon="fa-solid fa-bars" size={36} onPress={()=>{navigation?.navigate("Menu")}} style={styles.icon}/>
                      : <FontAwesome name="angle-left" size={48} onPress={()=>{navigation?.goBack()}} style={styles.icon}/>
                  }
                  
                </View>
                <View>
                    <Image source={require('../assets/avatar-img.jpg')} style={styles.avatar}/>
                </View>
            </View>
            { search ? <View >
                          <TextInput style={styles.searchbar} placeholder='search' paddingLeft={19}></TextInput>
                       </View> : <Text style={styles.itemText}> {screenTitle} </Text>  }
                  </View>
     );
}


// import { Container } from './styles';

export const Header = ({screenTitle, menu, search, nav, navigation}) => {
  const [displayNav,setDisplayNav] = useState(nav ? nav : false)
  const handleDisplayNav = () => {
    if (displayNav) {
      setDisplayNav(!displayNav)
    }else{
      setDisplayNav(!displayNav)
    }
    
  }
  return (
    <View>
      <View style={styles.HeaderContainer}>
          <TouchableOpacity /*onPress={handleDisplayNav}*/ style={styles.HeaderBtn}>
          { navigation ? console.warn("No navigation component") : console.warn("navigation component exist")  }
          { menu ? <Octicons name="three-bars" style={styles.HeaderIcon} size={24} color="black"
                    //onPress={()=>{navigation?.navigate("Menu")}}
                    onPress={handleDisplayNav} //onPress={()=>{navigation?.push("Menu")}}
                  />
                : <FontAwesome name="angle-left" size={24} onPress={()=>{navigation?.goBack()}} style={styles.icon}/>
            }
          </TouchableOpacity>
          <ProfilWidget navigation={navigation}  notification = {1}/>
      </View>
      { search ? <View >
                  <TextInput style={styles.searchbar} placeholder='search' paddingLeft={19}></TextInput>
                 </View> : <Text style={styles.itemText}> {screenTitle} </Text>  
      }
      {displayNav ? <MenuNav navigation={navigation}/>:""}
    </View>
  );
}
  

export default Header;