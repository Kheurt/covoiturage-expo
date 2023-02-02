import { FlatList, SafeAreaView, ScrollView } from "react-native";
import { View, Text } from "react-native";
import Header from "../../layout/Header";
import AlertItem from "../../components/alert/AlertItem";

export const PassengerHomeScreen = () => {
    const AlertDatas = [
        {
            id:1,
            title:"THOMAS",
            vehicle:"KIA (37K1-61058)",
            date:"02 DEC, 2022",
        },
        {
            id:1,
            title:"Paul",
            vehicle:"Vinfast (29K1-61789)",
            date:"01 DEC, 2022",
        },
        {
            id:1,
            title:"Yvan",
            vehicle:"Honda (28P1-19868)",
            date:"27 SEP, 2022",
        },
      ]

    return ( 
        <View>
            <Header search={true} menu={true} screenTitle={""} />
            <View>
                <Text>Search for a trip</Text>
            </View>
            <Text>Available</Text>
            <SafeAreaView>
                <ScrollView>
                <FlatList 
                    data={AlertDatas}
                    renderItem={({item})=> <AlertItem key={item.id} title={item.title} />}
                />
                </ScrollView>
            </SafeAreaView>
        </View>
     );
}

export default PassengerHomeScreen;