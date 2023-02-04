import { FlatList, SafeAreaView, ScrollView,Image } from "react-native";
import { View, Text } from "react-native";
import Header from "../../../layout/Header";
import AlertItem from "../../../components/alert/AlertItem";
import { styles } from "../../../layout/Style";

export const PassengerHomeScreen = ({navigation}) => {
    console.log(navigation.routeName)
    const AlertDatas = [
        {
            id:1,
            title:"THOMAS",
            vehicle:"KIA (37K1-61058)",
            date:"02 DEC, 2022",
        },
        {
            id:2,
            title:"Paul",
            vehicle:"Vinfast (29K1-61789)",
            date:"01 DEC, 2022",
        },
        {
            id:3,
            title:"Yvan",
            vehicle:"Honda (28P1-19868)",
            date:"27 SEP, 2022",
        },
      ]

    return ( 
        <View >
            <Header search={true} menu={true} screenTitle={""} />
            <View>
                <Image source={require('../../../assets/himg.png')} style={styles.headerimg}></Image>
                <Text style={styles.headertxt}>Search for a trip</Text>
                
            </View>
            <View>
               <Text style={styles.headertxt1}>Available</Text>
            </View>
            
            <SafeAreaView>
                {/**
                 * Planners Alerts
                 * List of planners who propose trips
                 */}
                
                <FlatList 
                    style={styles.reducespace}
                    data={AlertDatas}
                    renderItem={({item})=> <AlertItem key={item.id} title={item.title} navigation={navigation} />}
                />
                {/*<ScrollView></ScrollView>*/}
            </SafeAreaView>
        </View>
     );
}

export default PassengerHomeScreen;

