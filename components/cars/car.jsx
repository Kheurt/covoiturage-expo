import { View } from "react-native";
import { CarsDATA } from "./carsData";

export const CarItem = ({ shortname }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{shortname}</Text>
    </View>
  );

export const Cars = () => {
    const renderItem = ({ item }) => (
        <CarItem shortname={item.shortname} />
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={CarsDATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
