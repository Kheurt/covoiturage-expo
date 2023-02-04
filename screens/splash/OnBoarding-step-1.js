import { View, Image,TextInput } from "react-native"
import { styles } from "../../layout/Style";
import { AntDesign, Entypo,Octicons} from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

export const OnBoardScreen = ( {navigation : {navigate}} ) => {
    return(
        <View>
           <Image source={require('../../assets/logo.png')} style={styles.headerimg1}></Image>
           
           <View style={styles.inputhome}>
                <Entypo name="circle" size={24} color="black" style={styles.iconhome}/>
                <TextInput  placeholder="Depature" /> 
           </View>
           <View style={styles.inputhome}>
           <Octicons name="location" size={24} color="red" />
               <TextInput  placeholder="Destination" />
          </View>  
            <Image source={require('../../assets/car.png')} style={styles.Homeimage}></Image>
            <TouchableOpacity
               onPress={()=>navigate("OnBoarding")}
            >
               <View style={styles.circle3}>
                  <AntDesign name="arrowright" size={30} color="white" style={styles.arrowhome}
                  />   
               </View>
            </TouchableOpacity>
        </View>
    )
}