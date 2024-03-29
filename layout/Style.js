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
      backgroundColor:'rgba(225, 125, 75, 1)',
      borderRadius:60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'rgba(225, 125, 75, 1)',
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

    block: {
      flex: 1,
      flexDirection: 'colums',
      backgroundColor: '#FFFFFF',
      alignItems: 'left',
      justifyContent: 'center',
      borderWidth:0,
      paddingLeft:30,
      // borderColor: "#fff",
    },
  blockDetails:{
      paddingTop:15,
      height:465,
      borderRadius:20,
      width:365,
      marginLeft:10,
      backgroundColor: '#FFFFFF',
  },
  blockTitle: {
    flex: 1,
    flexDirection: 'row',
  //   backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    color:'#A4A4B2'
  },
  blockSubTitle: {
      flex: 1,
      flexDirection: 'row',
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  back: {
    backgroundColor: '#D5E3FF',
    paddingBottom:10,
  },
  headerimg:{
    marginLeft:10,
  },
  headertxt:{
    marginTop:-95,
    color:'#fff',
    fontWeight: "bold",
    fontSize:25,
    marginLeft: 50,
  },
  headertxt1:{
    marginTop:65,
    marginLeft:40,
    fontSize:15,
    fontWeight:'bold'
  },
  reducespace:{
    columnGap:1,
    marginBottom:100
  },
  headerimg1:{
    width:180,
    height:100,
    marginTop:150,
    marginLeft:95,
  },
  inputhome:{
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    marginLeft:50,
    marginRight:40,
    marginTop:30,
    flexDirection:"row",
    
  },
  Homeimage:{
    marginTop:70,
    marginLeft:30,
  },
  circle3:{
    width: 60,
    height:60,
    backgroundColor: '#FF7D4B',
    borderWidth: 2,
    borderRadius: 30,
    borderColor: 0,
    marginTop: 50,
    marginLeft:300,
  },
  arrowhome:{
    marginTop:15,
    marginLeft:15,
  },
  iconhome:{
    marginRight: 10,
  },
  Homeimage1:{
    marginTop:180,
    marginLeft:30,
  },
  text1:{
    fontSize: 34,
    fontWeight: '700',
    marginLeft:20,
    marginTop:10,
  },
  text2:{
    color:'grey',
    marginLeft:20,
    marginTop:10,
  },
  text3:{
    textAlign:"center",
    fontWeight:"bold",
    marginTop:30,
  },
  btn:{
      width:120,
      height:40,
      backgroundColor:'#FF7D4B',
      borderRadius:60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#FF7D4B',
      borderWidth:1,
  },
  btnTxt:{
    // fontSize:26,
    color: "white",
    fontWeight:"bold",
  },
  buttoncontainer:{
     flexDirection:"row",
     justifyContent:"space-between",
     margin:20,
  },

  //Header Bar
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
    icon:{
        marginLeft:12,
        marginTop:5,
    },
    HeaderContainer : {  
        flexDirection:"row",
        justifyContent:"space-between",
        margin:35
    },
    HeaderBtn:{
        borderRadius:10000,
        backgroundColor:"white",
        zIndex:1000000000,
        width:35,
        height:35
    },
    HeaderIcon:{
        fontSize:18,
        textAlign:"center",
        paddingTop:7
    },

    //Alert Item
    alertBox:{
        margin: 9,
        border: 2,
        borderRadius: 29,
        height: 100,
        width: 360,
        backgroundColor: '#D5E3FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop:30,
        padding:20,
    },
    alertAvatar:{
        width: 45,
        height:45,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
        marginRight:10
    },
    alertActionBtn:{
        width: 45,
        height:45,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 0,
        backgroundColor:'rgba(84, 91, 253, 1)',
    },
    alertTitle:{
        fontSize:20,
        marginTop:10,
        marginLeft:-100,
    },
    alertActionBtnIcon:{
        marginLeft:15,
        color:'white',
    },
    
    


});

