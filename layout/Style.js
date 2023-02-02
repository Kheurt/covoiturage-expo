import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(245, 245, 245, 1)',
      margin: -1
    },
    container1:{
      backgroundColor: '#D5E3FF',
      height:619,
      marginTop:1,
      borderRadius:30,
    },
    head1:{
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
    circle1:{
        width: 60,
        height:60,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
    },
    icon1:{
        marginLeft:18,
        marginTop:5,
    },
    circle2:{
      width: 60,
      height:60,
      backgroundColor: 'white',
      borderWidth: 2,
      borderRadius: 30,
      borderColor: 0,
      marginRight:25,
    },
    itemText:{
      // fontFamily: 'Sans-serif',
      textAlign: 'center',
      fontSize:34,
      fontWeight: 'bold',
      marginBottom:20,
      // fontFamily:'MontserratAlternates',
    },
    
    button:{
      width:120,
      height:40,
      backgroundColor:'rgba(84, 91, 253, 1)',
      borderRadius:60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgba(84, 91, 253, 1)',
      borderWidth:1,
      marginTop:45,
      marginLeft:250,
    },
    buttonText:{
      fontSize:26,
      color: 'white',
    },
    list:{
      fontSize:26,
      // fontVariant: 'bold'
      fontStyle: 'bold',
      margin:19,
    },
  
  });