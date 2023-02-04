import { View,Image,Text, Pressable } from "react-native"
import { styles } from "../../layout/Style";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

export const OnBoardingScreen = ( {navigation : {navigate}} ) => {

   const [isPlanner, setIsPlanner] = useState(true)

   useEffect(()=>{
      console.log("Is Planner?")
      console.log(isPlanner)
   })

    return(
        <View>
                <Image source={require('../../assets/car.png')} style={styles.Homeimage1}></Image>
                <Text style={styles.text1}>Welcome on</Text>
                <Text style={styles.text1}>LetsGo APP</Text>
                <Text style={styles.text2}>Earn money by sharing your travels </Text>
                <Text style={styles.text3}>What are you ? </Text>
                <View style={styles.buttoncontainer}> 
                  <TouchableOpacity
                     onPress={()=>{setIsPlanner(true)}}
                  >
                     <View style={styles.btn}>
                        <Text style={styles.btnTxt}>Trip planner</Text>
                     </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={()=>{setIsPlanner(false)}}
                  >
                     <View style={styles.btn}>
                        <Text style={styles.btnTxt}>Passenger</Text>
                     </View>
                  </TouchableOpacity>
                </View>
               <TouchableOpacity
                  onPress={()=>{
                     isPlanner ? navigate("LetsGoPlanner") : navigate("LetsGoPassenger");
                  }}
               >
                  <View style={styles.circle3}>
                     <AntDesign name="arrowright" size={30} color="white" style={styles.arrowhome}/>
                  </View>
               </TouchableOpacity>
        </View>
    )
}