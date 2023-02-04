import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TripAlert } from '../../components/Index';
import { TripDetails } from '../../components/Index';
import { AlertForm } from '../../components/Index';
import Header from '../../layout/Header';
import AlertItem from '../../components/alert/AlertItem';
import Button from '../../components/common/Button';
import { styles } from "../../layout/Style";

export const TravelHistoryScreen = ({navigation}) => {

    const AlertDatas = [
        {
            id:1,
            title:"Jores Edimo",
            vehicle:"KIA (37K1-61058)",
            date:"12 DEC, 2022",
        },
        {
            id:2,
            title:"Tagne Kondom",
            vehicle:"Vinfast (29K1-61789)",
            date:"01 JAN, 2023",
        },
        {
            id:3,
            title:"Jean Paul Sartre",
            vehicle:"Honda (28P1-19868)",
            date:"02 JAN, 2023",
        },
        {
          id:4,
          title:"Martin Ndi Mvondo",
          vehicle:"Landcruiser (28P1-19868)",
          date:"03 JAN, 2023",
        },
        {
          id:5,
          title:"Martin Ndi Mvondo",
          vehicle:"Yarix (18-LS2020)",
          date:"03 JAN, 2023",
        },
        {
          id:6,
          title:"Krys Tedongmouo",
          vehicle:"Landcruiser (LC-20456)",
          date:"03 JAN, 2023",
        },
        {
          id:7,
          title:"Sigala Dansi",
          vehicle:"Lamborguini (XLS59)",
          date:"03 JAN, 2023",
        },
        {
          id:8,
          title:"Georges Amou'ou",
          vehicle:"Chervrolet (ChevT)",
          date:"03 JAN, 2023",
        },
      ]

    return ( 
        <View >
            <Header search={true} screenTitle={"My Trips"} navigation={navigation}/>
            
            {/* <SafeAreaView> */}
                {/**
                 * Planner registred Trips
                 * List of passengers that are registered for a trip
                 */}
                <FlatList 
                    style={styles.reducespace}
                    data={AlertDatas}
                    renderItem={({item})=> <AlertItem key={item.id} title={item.title} navigation={navigation} />}
                />
            {/* </SafeAreaView> */}
        </View>
     );
}



export default AlertScreen;