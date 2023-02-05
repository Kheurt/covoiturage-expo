import { View, SafeAreaView, FlatList, Image } from "react-native";
import { styles } from "../../layout/Style";
import { CarItem, CarDetails } from "../../components/cars/Car";
import Header from "../../layout/Header";

export const CarDetailsScreen = ({route, navigation}) => {
    const car = route?.params
    return ( 
    <View style={styles.back}>
        <Header screenTitle={"Toyota Carine 3"} navigation={navigation} />
        <CarDetails details={car}/>
      </View>
       );
}

export const CarsScreen = ({navigation}) => {
    const CarsDatas = [
        {
          id:1,
          registration:"CE 825 CW",
          name:"Prado XL 237",
          motor_type:"Diesel",
          nbr_places:20,
          description:"La voiture est équipée d’une grande"+
                    "male arrière , de chaises en cuire bien"+ 
                    "espacées pour un meilleur confort des"+
                    "jambes. Voiture climatisée.",
          vehicle:"Landcruiser (LC-20456)",
        },
        {
            id:2,
            registration:"LT 15476",
            name:"4Runner",
            motor_type:"Super",
            nbr_places:20,
            description:"La voiture est équipée d’une grande"+
                      "male arrière , de chaises en cuire bien"+ 
                      "espacées pour un meilleur confort des"+
                      "jambes. Voiture climatisée.",
            vehicle:"4Runner (LC-20456)",
        },
        {
            id:3,
            registration:"OU 545 XL",
            name:"Yaris 45",
            motor_type:"Super",
            nbr_places:20,
            description:"La voiture est équipée d’une grande"+
                      "male arrière , de chaises en cuire bien"+ 
                      "espacées pour un meilleur confort des"+
                      "jambes. Voiture climatisée.",
            vehicle:"Yaris (LC-20456)",
        },
        {
            id:4,
            registration:"EN 457 CM",
            name:"Hummer",
            motor_type:"Diesel",
            nbr_places:20,
            description:"La voiture est équipée d’une grande"+
                      "male arrière , de chaises en cuire bien"+ 
                      "espacées pour un meilleur confort des"+
                      "jambes. Voiture climatisée.",
            vehicle:"Hummer (LC-20456)",
        },
      ]
    return ( 
        <View >
            <Header screenTitle={"My Cars"} navigation={navigation}/>
            <View>
                <Image source={require('../../assets/car-img.png')} style={styles.headerimg}></Image>
                
            </View>
            <View>
               {/* <Text style={styles.headertxt1}
                onPress={()=>navigation.navigate("Alerts")}
               >Alerts</Text> */}
            </View>
            
            <SafeAreaView>
                {/**
                 * Car list
                 * List of planner's cars
                 */}
                <FlatList 
                    style={styles.reducespace}
                    data={CarsDatas}
                    renderItem={({item})=> <CarItem key={item.id} carData={item} navigation={navigation} />}
                />
            </SafeAreaView>
        </View>
     );
}

