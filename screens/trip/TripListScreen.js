import React, { useEffect,useState,useRef } from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, Easing, TouchableOpacity, Pressable } from 'react-native';
import HeaderMain from '../../components/Header/Header';
import Header from '../../layout/Header';
import MenuNav from '../../components/Nav/Nav';
import TripInfo from '../../components/trip/TripInfo';

const dummyArray = [
    
    {id:"1",departure:"Douala - Bonapris",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"2",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"3",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"4",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"5",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"6",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"7",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"8",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"9",departure:"Douala - Bonapriso",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
    {id:"10",departure:"Douala - Bonapri",destination:"Yaounde - Melen",prix:"5000F",profil:"",date:"12/12/2022",car:"BMW (37A6-58039)"},
   
  ];

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
export const TripListScreen = ({navigation}) => {
    const [displayNav,setDisplayNav] = useState(false)
    const [listItems, setListItems] = useState(dummyArray);
    //const [listItems, setListItems] = useState(AlertDatas);
    const translateX = useRef(new Animated.Value(Dimensions.get("window").height)).current 
    useEffect(()=>{
        Animated.timing(translateX,{toValue:0,duration:2000}).start();
    })

    const ItemView = ({ item }) => {

        return (
          // Single Comes here which will be repeatative for the FlatListItems
          <Animated.View style={{transform:[{translateY:translateX}]}}
            onTouchEnd={()=>{navigation.navigate("AlertDetails", {...item})}} 
            >   
                {/* <TouchableOpacity onPress={}> */}
                    {/* <Pressable onPress={}> */}
                        <TripInfo
                            departure={item.departure}
                            destination={item.destination}
                            //prix={item.price}
                            prix={item.prix} 
                            profil=""
                            date={item.date} 
                            //vehicle={item.vehicle} 
                            vehicle={item.car} 
                        />
                    {/* </Pressable> */}
                {/* </TouchableOpacity> */}
          </Animated.View>
        );
      };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Header screenTitle={"Trip of my List"} nav={false} search={false} navigation={navigation} />     
            </View>
            <FlatList
                data={listItems}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: '#D4E1FA',
    },
    txt:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize:30
    }
});

export default TripListScreen;