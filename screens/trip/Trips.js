import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, VirtualizedList } from "react-native";
import { DATA } from './TripData'

const TripItem = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

export const Trips = () => {
    const [selectedId, setSelectedId] = useState(null);
  
    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selectedId ? 'white' : 'black';
  
      return (
        <TripItem
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    );
};

const VDATA = [];

const getVItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`
});

const getVItemCount = (data) => 50;

const VTripItem = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export const VTrips = () => {
    return (
        <SafeAreaView style={styles.container}>
        <VirtualizedList
            data={VDATA}
            initialNumToRender={4}
            renderItem={({ item }) => <VTripItem title={item.title} />}
            keyExtractor={item => item.key}
            getItemCount={getVItemCount}
            getItem={getVItem}
        />
        </SafeAreaView>
    );
}
  
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    Vitem: {
        backgroundColor: '#f9c2ff',
        height: 150,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
      },
    title: {
      fontSize: 32,
    },
  });
