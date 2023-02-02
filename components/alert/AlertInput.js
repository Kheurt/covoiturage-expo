import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useRef, useState } from 'react';
import { Form, FormItem } from 'react-native-form-component';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import fortawesome from '@fortawesome/fontawesome'
import { faCircleDot, faMoneyBill, faLocationDot, faCalendarDays,faClock,faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

fortawesome.library.add(faCircleDot,faMoneyBill, faLocationDot, faCalendarDays,faClock,faUser)

function AlertInput(props) {
    const [inputValue,setInputValue] = useState()
    const inputValueInput = useRef();
    return(
        <View style={styles.input}>
            <FontAwesomeIcon icon={props.icon} size={30} style={styles.icon2}/>
            {/* <TextInput style={styles.input1} placeholder={props.text}/> */}
            <FormItem
                // label="Point d'arrivée"
                isRequired
                value={inputValue}
                onChangeText={(inputValue) => setInputValue(inputValue)}
                asterik
                ref={inputValueInput}
                style={styles.input1}
                placeholder={props.text}
                //textInputStyle={styles.input1}
            />
       </View>
      
    )
}
export default AlertInput;




const styles = StyleSheet.create({
        
    input:{
        flexDirection: 'row',
        // marginLeft:5,
        // marginTop:20,
        // justifyContent: 'space-between',
    },
   
    input1:{
        paddingVertical:15,
        borderBottom:10,
        borderRadius: 0,
        width:320,
        marginLeft:16,
        borderBottomColor:'rgba(84, 91, 253, 1)',
        borderBottomWidth:2, 
        backgroundColor:'rgba(0,0,0,0)'
    },
    icon2:{
        marginLeft:15,
        marginTop:20,
    },
})