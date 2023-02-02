import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Title from '../../components/Title';
import NewFormInput from '../../components/forms/NewFormInput';
import Existing from './existing';
const NewCar = () => {
    const [togleOption, setTogleOption] = useState(1);
    const togleHandler = (val)=> setTogleOption(val)
    return ( 
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <HeaderMain/>
                <Title title='new car'/>
                <View style={styles.options}>
                    <TouchableOpacity style={[styles.btn,togleOption==1?styles.actif:'']}>
                        <Text>caracteristics</Text>
                    </TouchableOpacity>         
                    <TouchableOpacity  style={[styles.btn,togleOption==0?styles.actif:'']}>
                        <Text>confort</Text>
                    </TouchableOpacity>    
                </View>
                <NewFormInput title='Marque' placeholder='Entrer la marque'/>
                <NewFormInput title='Matriculation' placeholder='Entrer le matricule'/>
                <NewFormInput title='Type de moteur' placeholder='Entrer le moteur'/>
                <NewFormInput title='Nombre de places' placeholder='Entrer le nombre de places'/>
                <TouchableOpacity style={styles.btnSend}>
                    <Text style={styles.add}>add</Text>
                </TouchableOpacity>
            </View>
            <Existing/>
            
        </View> 
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D0DEFA'
    },
    options:{
        flexDirection:'row',
        alignSelf:'center',
        margin:10
    },
    btn:{
        borderRadius:100000,
        padding:5,
        backgroundColor:'lightgray',
        margin:10,
    },
    actif:{
        backgroundColor:'#F6623E'
    },
    containerMain:{
        flex:2,
        paddingLeft:50,
        paddingRight:50,
        backgroundColor:'#F6F9FF',
        borderBottomWidth:2,
        borderBottomColor:'white',
        borderEndColor:'white',
        borderRadius:30
    },
    btnSend:{
        justifyContent:'flex-end',
        color:'white',
        padding:10,
        borderRadius:10000,
        backgroundColor:'#FF7D4B',
        width:100,
        textAlign:'center',
        alignSelf:'flex-end',
        margin:10
    },
    add:{
        textAlign:'center',
        color:'white',
        justifyContent:'flex-end',
        
    }
})
export default NewCar;