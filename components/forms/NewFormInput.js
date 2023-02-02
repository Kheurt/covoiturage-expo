import { StyleSheet, Text, View, Button,TextInput } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';
const NewFormInput = ({placeholder,title}) => {
    return ( 
        <View>
            <Text style={styles.txt}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                />
                <Entypo name="circle-with-cross" style={styles.cross} size={20} color="black" />
            </View>
            
        </View>
        
    );
}
const styles = StyleSheet.create({
    input:{
        textAlign:'center',
        borderBottomWidth:1,
        color:'black',
        fontWeight:'bold',
        fontSize:17,
        padding:25,
        height:10,
        borderColor:'gray',
        width:270
    },
    txt:{
        color:'gray',
        marginTop:15
    },
    inputContainer:{
        flexDirection:'row'
    },
    cross:{
        position:'relative',
        top:10
    }
})
export default NewFormInput;