import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";

export const TripDetails = (props) => {
  const {
    departure = "Yaounde - Melen",
    destination = "Yaounde - Bastos",
    date = "10/12/2022",
    schedules = "08 AM - 05 AM",
    places = "10 places",
    price = "5000Fcfa / place",
    reservation = "3 places",
    confirmation = "2 places",
  } = props;

  const dataList = [
    {
      name: "Departure",
      data: departure,
    },
    {
      name: "Destination",
      data: destination,
    },
    {
      name: "Date",
      data: date,
    },
    {
      name: "Schedules",
      data: schedules,
    },
    {
      name: "Number of places",
      data: places,
    },
    {
      name: "Price",
      data: price,
    },
    {
      name: "Number of reservation",
      data: reservation,
    },
    {
      name: "Number of confirmation",
      data: confirmation,
    },
  ];
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Details of Alert</Text>
          <View style={styles.content}>
            {dataList.map((elt, id) => {
              return (
                <View key={id} style={styles.dataWrapper}>
                  <Text style={styles.dataName}>{elt.name}</Text>
                  <Text style={styles.dataContent}>
                    {elt.data ? elt.data : "aucune donnée trouvée"}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#cfe0ffd9",
    paddingTop: StatusBar.currentHeight && StatusBar.currentHeight,
  },
  container: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  content: {
    marginTop: 18,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  dataWrapper: {
    marginVertical: 8,
  },
  dataName: {
    paddingVertical: 3,
    fontSize: 15,
    color: "gray",
  },
  dataContent: {
    fontSize: 18,
    fontWeight:"700",
    
  },
});
