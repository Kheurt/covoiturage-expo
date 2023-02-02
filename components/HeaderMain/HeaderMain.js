import { StyleSheet, Text, View, Button, Pressable,Image, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
const HeaderMain = () => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <AntDesign name="bars" size={24} style={styles.bars} color="black" />
            </TouchableOpacity>
            <Image
                style={styles.profil}
                source = {require("../../assets/profilImg.png")}
            />
        </View> 
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    btn:{
        borderRadius:100000,
        height:40,
        width:40,
        padding:5,
        backgroundColor:'white'
    },
    profil:{
        height:40,
        width:40,
        borderRadius:10000,
        textAlign:'center',
    },
    bars:{
        textAlign:'center',
        fontWeight:'bold',
        paddingTop:3
    }
})
export default HeaderMain;