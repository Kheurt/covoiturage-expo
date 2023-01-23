import { View, Image, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-fontawesome';

function Header( {screenTitle} ) {
    return (
        <> 
            <View style={styles.head}>
                <View style={styles.backCircle}><FontAwesome name="angle-left" size="lg" style={styles.icon}/></View>
                <View>
                    <Image source={require('../assets/avatar-img.jpg')} style={styles.avatar}/>
                </View>
            </View>
            <Text style={styles.itemText}> {screenTitle} </Text>
        </>
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
    },
    icon:{
        marginLeft:18,
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