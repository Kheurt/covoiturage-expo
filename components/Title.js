import { StyleSheet, Text, View, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
const Title = ({title}) => {
    return ( 
        <Text style={styles.txt}>{title}</Text>
    );
}
const styles = StyleSheet.create({
    txt:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold'
    }
})
export default Title;