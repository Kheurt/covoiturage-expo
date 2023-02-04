import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { AntDesign, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';

// import { Container } from './styles';

const ProfileSettingsScreen = ({navigation}) => {
    const [displayNav,setDisplayNav] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" onPress={()=>navigation.goBack()} style={styles.arrow} size={24} color="white" />
                <View>
                    <Text style={styles.profileTxt}>Profile</Text>
                    <Image 
                        style={styles.img}
                        source = {require("../../assets/largeIcon.png")}
                    />
                </View>
                <Feather name="bell" size={24} color="white" />
            </View>
            <View style={styles.btnEditContainer}>
                <View style={styles.btnEdit}>
                    <Button  title='Edit profile'/>
                </View>
            </View> 
            <Text style={styles.aboutTxt}>About Me</Text>
            <TouchableOpacity style={styles.boxContainer}>
                <View style={styles.flex}>
                    <AntDesign name="staro" style={styles.paramIco} size={24} color="black" />
                    <Text style={styles.paramIco}>Notes</Text>
                </View>
                <Text>{'>'}</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.boxContainer}>
                <View style={styles.flex}>
                    <Ionicons name="chatbubbles-outline" style={styles.paramIco} size={24} color="black" />
                    <Text style={styles.paramIco}>Comments</Text>
                </View>
                <Text>{'>'}</Text>
            </TouchableOpacity>   
            <Text style={styles.aboutTxt}>Preferences</Text>
            <TouchableOpacity style={styles.boxContainer}>
                <View style={styles.flex}>
                    <Ionicons name="language" style={styles.paramIco} size={24} color="black" />
                    <Text style={styles.paramIco}>Language</Text>
                </View>
                <Text>{'>'}</Text>
            </TouchableOpacity> 
              
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },
    img:{
        width:100,
        height:100,
        marginBottom:5,
        marginTop:10,
        borderRadius:100000000
    },
    imgContainer:{
        width:"80%",
        alignSelf:"center",

    },
    header:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:45,
        height:200,
        width:"100%",
        alignSelf:"center",
        backgroundColor:"#D5E3FF"
    },
    profileTxt:{
        textAlign:"center",
        color:"white"
    },
    aboutTxt:{
        margin:10,
        backgroundColor:"#F6F6F6"
    },
    btnEdit:{
        width:200,
        borderRadius:5,
        alignSelf:"center",
        margin:20
    },
    btnEditContainer: {
        backgroundColor:"white",
    },
    flex:{
        flexDirection:"row",
    },
    boxContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        padding:20,
        backgroundColor:"white"
    },
    paramIco:{
        margin:5
    }
})

export default ProfileSettingsScreen;