import { View } from "react-native";
import { CarsDATA } from "./carsData";

var SingleCars = {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      shortname: 'Prado',
      fullname: 'Prado TX 2008',
      registration: 'CE 267 FG', //Immatriculation
      places: 4, //nombre de places
      motor_type: 'Diesel - fuel', //type de moteur (diesel/super)
      car_brand: 'Toyota', 
      description: 'Pariatur incididunt sint et ullamco consectetur veniam consectetur deserunt. Consectetur velit labore aute anim exercitation. Fugiat commodo consectetur magna commodo labore quis aliquip officia minim cillum.',
      amenties:{
        climatisation: true, //cliem
        back_trunck: true, //malle arrière
        baby_seat: true, //chaise pour bébé
        music: true, //musique à bord
      }
    }


export const  CarDetail = () => {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <View>
                <Text>Immatriculation</Text>
                <Text>{SingleCars.registration}</Text>
            </View>
            <View>
                <Text>Nombre de places</Text>
                <Text>{SingleCars.places}</Text>
            </View>
            <View>
                <Text>Moteur</Text>
                <Text>{SingleCars.motor_type}</Text>
            </View>
            <View>
                <Text>Description</Text>
                <Text>{SingleCars.description}</Text>
            </View>
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
