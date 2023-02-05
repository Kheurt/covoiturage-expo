import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TripAlert } from '../../components/Index';
import { TripDetails } from '../../components/Index';
import { AlertForm } from '../../components/Index';
import Header from '../../layout/Header';
import AlertItem from '../../components/alert/AlertItem';
import Button from '../../components/common/Button';
import { styles } from "../../layout/Style";

export const AlertScreen = ({navigation}) => {
  //console.log(navigation.routeName)
    const AlertDatas = [
        {
          id:1,
          title:"Jores Edimo",
          vehicle:"KIA (37K1-61058)",
          date:"12 DEC, 2022",
          departure:"Douala - Bonapri",
          destination:"Yaounde - Melen",
          prix:"5000F",
          profil:"",
          nbr_places:4,
          nbr_bookings:3,
          nbr_booking_confirm:1,
        },
        {
          id:2,
          title:"Tagne Kondom",
          vehicle:"Vinfast (29K1-61789)",
          date:"01 JAN, 2023",
          departure:"Dschang - Centre",
          destination:"Yaounde - Mvan",
          prix:"2500F",
          profil:"",
          nbr_places:8,
          nbr_bookings:5,
          nbr_booking_confirm:5,
        },
        {
          id:3,
          title:"Jean Paul Sartre",
          vehicle:"Honda (28P1-19868)",
          date:"02 JAN, 2023",
          departure:"Yaoundé - Barrière",
          destination:"Yaounde - Melen",
          prix:"1000F",
          profil:"",
          nbr_places:70,
          nbr_bookings:33,
          nbr_booking_confirm:24,
        },
        {
          id:4,
          title:"Martin Ndi Mvondo",
          vehicle:"Landcruiser (28P1-19868)",
          date:"03 JAN, 2023",
          departure:"Douala - Kotto",
          destination:"Yaounde - Etoundi",
          prix:"3000F",
          profil:"",
          nbr_places:20,
          nbr_bookings:3,
          nbr_booking_confirm:0,
        },
        {
          id:5,
          title:"Martin Ndi Mvondo",
          vehicle:"Yarix (18-LS2020)",
          date:"03 JAN, 2023",
          departure:"Douala - Bonamoussadi",
          destination:"Yaounde - Nkolmesseng",
          prix:"7000F",
          profil:"",
          nbr_places:4,
          nbr_bookings:4,
          nbr_booking_confirm:3,
        },
        {
          id:6,
          title:"Krys Tedongmouo",
          vehicle:"Landcruiser (LC-20456)",
          date:"03 JAN, 2023",
          departure:"Yaoundé - Miniprix",
          destination:"Yaounde - Mvan",
          prix:"8000F",
          profil:"",
          nbr_places:30,
          nbr_bookings:7,
          nbr_booking_confirm:0,
        },
        {
          id:7,
          title:"Sigala Dansi",
          vehicle:"Lamborguini (XLS59)",
          date:"03 JAN, 2023",
          departure:"Yaoundé - Damas",
          destination:"Yaounde - Nsam",
          prix:"12000F",
          profil:"",
          nbr_places:4,
          nbr_bookings:0,
          nbr_booking_confirm:0,
        },
        {
          id:8,
          title:"Georges Amou'ou",
          vehicle:"Chervrolet (ChevT)",
          date:"03 JAN, 2023",
          departure:"Douala - Bonapri",
          destination:"Yaounde - Mvan",
          prix:"15000F",
          profil:"",
          nbr_places:10,
          nbr_bookings:10,
          nbr_booking_confirm:9,
        },
      ]

    return ( 
        <View >
            <Header search={true} screenTitle={"All Alerts"} navigation={navigation}/>
            
            {/* <SafeAreaView> */}
                {/**
                 * Passenger Alerts
                 * List of passengers requisting for a trip
                 */}
                <FlatList 
                    style={styles.reducespace}
                    data={AlertDatas}
                    renderItem={({item})=> <AlertItem key={item.id} alertData={item} navigation={navigation} />}
                />
            {/* </SafeAreaView> */}
        </View>
     );
}

export default AlertScreen;