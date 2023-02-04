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
      ]

    return ( 
        <View >
            <Header search={true} menu={true} screenTitle={""} navigation={navigation}/>
            <View>
                <Image source={require('../../../assets/himg.png')} style={styles.headerimg}></Image>
                <Text style={styles.headertxt}
                  onPress={()=>navigation.navigate("AddAlertScreen")}
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
                    renderItem={({item})=> <AlertItem key={item.id} title={item.title} navigation={navigation} />}
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

