import { FlatList, SafeAreaView, ScrollView, Image, Text, View, Button } from "react-native";

import { AlertForm } from '../../../components/Index';
import Header from "../../../layout/Header";
import AlertItem from "../../../components/alert/AlertItem";
import { styles } from "../../../layout/Style";

export const PlannerHomeScreen = ({navigation}) => {
  //console.log(navigation.routeName)
      const AlertDatas = [
        {
          id:1,
          title:"Krys Tedongmouo",
          vehicle:"Landcruiser (LC-20456)",
          date:"03 JAN, 2023",
          departure:"Yaoundé - Miniprice",
          destination:"Yaounde - Mvan",
          price:"8000F",
          profil:"",
          nbr_places:20,
          nbr_bookings:3,
          nbr_booking_confirm:0,
        },
        {
          id:2,
          title:"Sigala Dansi",
          vehicle:"Lamborguini (XLS59)",
          date:"03 JAN, 2023",
          departure:"Yaoundé - Damas",
          destination:"Yaounde - Nsam",
          price:"12000F",
          profil:"",
          nbr_places:4,
          nbr_bookings:4,
          nbr_booking_confirm:3,
        },
        {
          id:3,
          title:"Georges Amou'ou",
          vehicle:"Chervrolet (ChevT)",
          date:"03 JAN, 2023",
          departure:"Douala - Bonapri",
          destination:"Yaounde - Mvan",
          price:"15000F",
          profil:"",
          nbr_places:30,
          nbr_bookings:7,
          nbr_booking_confirm:0,
        },
        {
          id:4,
          title:"Martin Ndi Mvondo",
          vehicle:"Yarix (18-LS2020)",
          date:"03 JAN, 2023",
          departure:"Douala - Bonamoussadi",
          destination:"Yaounde - Nkolmesseng",
          price:"7000F",
          profil:"",
          nbr_places:4,
          nbr_bookings:0,
          nbr_booking_confirm:0,
        },
      //   {
      //     id:5,
      //     title:"Jean Paul Sartre",
      //     vehicle:"Honda (28P1-19868)",
      //     date:"02 JAN, 2023",
      //     departure:"Yaoundé - Barrière",
      //     destination:"Yaounde - Melen",
      //     price:"1000F",
      //     profil:"",
      //     nbr_places:10,
      //     nbr_bookings:10,
      //     nbr_booking_confirm:9,
      // },
      // {
      //   id:6,
      //   title:"Martin Ndi Mvondo",
      //   vehicle:"Landcruiser (28P1-19868)",
      //   date:"03 JAN, 2023",
      //   departure:"Douala - Kotto",
      //   destination:"Yaounde - Etoundi",
      //   price:"3000F",
      //   profil:"",
      //   nbr_places:10,
      //   nbr_bookings:10,
      //   nbr_booking_confirm:9,
      // },
      ]

    return ( 
        <View >
            <Header search={true} menu={true} screenTitle={""} navigation={navigation}/>
            <View>
                <Image source={require('../../../assets/himg.png')} style={styles.headerimg}></Image>
                <Text style={styles.headertxt}
                  onPress={()=>navigation.navigate("AddAlert")}
                >ADD TRIP</Text>
                
            </View>
            <View>
               <Text style={styles.headertxt1}
                onPress={()=>navigation.navigate("Alerts")}
               >Alerts</Text>
            </View>
            
            <SafeAreaView>
                {/**
                 * Passenger Alerts
                 * List of passengers requisting for a trip
                 */}
                <FlatList 
                    style={styles.reducespace}
                    data={AlertDatas}
                    renderItem={({item})=> <AlertItem key={item.id} alertData={item} navigation={navigation} />}
                />
            </SafeAreaView>
        </View>
     );
}


export const PlannerTestHomeScreen = ( {navigation} ) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {/* <View style={styles.container}> */}
            {/* <Header /> */}
            {/* <View> */}
              {/* <TripAlert /> */}
              {/* <TripDetails /> */}
              <AlertForm navigation={navigation}/>
            {/* </View> */}
            {/* <StatusBar style="auto" /> */}
          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
      
    );
  }

