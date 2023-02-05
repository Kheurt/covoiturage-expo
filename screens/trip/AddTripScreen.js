import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import NewFormInput from "../../components/forms/NewFormInput";

export const AddTripScreen = () => {
    const [togleOption, setTogleOption] = useState(1);
    const togleHandler = (val)=> setTogleOption(val)
    return ( 
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <Header screenTitle={"Add Trip"}/>
                
                <NewFormInput title='Departure' placeholder="Entrer l'origine"/>
                <NewFormInput title='Destination' placeholder='Entrer la destination'/>
                <NewFormInput title='Date' placeholder='Entrez la date'/>
                <NewFormInput title='Schedules' placeholder='Entrez lheure'/>
                <NewFormInput title='Places' placeholder='Entrez le nombre de places'/>
                <NewFormInput title='Budget' placeholder='Entez le budget'/>
                <TouchableOpacity style={styles.btnSend}>
                    <Text style={styles.add}>Add</Text>
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
