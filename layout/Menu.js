import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import ListRowItem from "../components/ListItems";
import MenuNav from '../components/Nav/Nav';

export const MenuData = [
    {
        title:"List of my trips",
        navigationLink:""
    },
    {
        title:"History of my travels",
        navigationLink:""
    },
    {
        title:"My cars",
        navigationLink:""
    },
    {
        title:"My drivers",
        navigationLink:""
    },
    {
        title:"Alerts",
        navigationLink:""
    },
]

export const Menu = ({navigation}) => {
    return ( <View style={styles.container}>
        {/* <FlatList
          data={MenuData}
          renderItem={({item}) => <ListRowItem style={styles.item} text={item.title} screenName={item.navigationLink} /> }
        /> */}

        <MenuNav navigation={navigation} />
      </View> );
}

export const AvatarMenuData = [
    {
        title:"Profile",
        navigationLink:""
    },
    {
        title:"Update profile",
        navigationLink:""
    },
    {
        title:"Logout",
        navigationLink:""
    },
]

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });