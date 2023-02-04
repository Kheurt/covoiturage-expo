import React, { useEffect,useState,useRef } from 'react';
import { FlatList, View, Text, SafeAreaView, StyleSheet, Dimensions, Animated, Easing } from 'react-native';
import HeaderMain from '../../components/Header/Header';
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
export const TripListScreen = ({navigation}) => {
    const [displayNav,setDisplayNav] = useState(false)
    const [listItems, setListItems] = useState(dummyArray);
    const translateX = useRef(new Animated.Value(Dimensions.get("window").height)).current 
    useEffect(()=>{
        Animated.timing(translateX,{toValue:0,duration:2000}).start();
    })

    const ItemView = ({ item }) => {

        return (
          // Single Comes here which will be repeatative for the FlatListItems
          <Animated.View style={{transform:[{translateY:translateX}]}} >
                <TripInfo
                    departure={item.departure}
                    destination={item.destination}
                    prix={item.prix} 
                    profil=""
                    date={item.date} 
                    car={item.car} 
                />
          </Animated.View>
        );
      };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <HeaderMain navigation={navigation} stDisplayNav = {setDisplayNav} displayNav={displayNav}/>
                {displayNav ? <MenuNav navigation={navigation}/>:""}      
            </View>
            <Text style={styles.txt}>List of my trips</Text>
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