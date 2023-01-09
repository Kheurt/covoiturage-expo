import React, { useRef, useState } from 'react';
import { Button, View, StyleSheet } from "react-native";
import { Form, FormItem } from 'react-native-form-component';

export const PlanTripScreen = () => {
    return ( 
        <View>
            <Text>Ajouter une alert</Text>
            <View style={style.body}>
                <AddTripForm/>
            </View>
            <Text>Liste des alertes existantes</Text>
            <View>
                {/* trip preview list */}
            </View>
        </View>
     );
}

const [departure,setDeparture] = useState()
const [destination,setDestination] = useState()
const [date,setDate] = useState()
const [hour,setHour] = useState()
const [places,setPlaces] = useState()
const [budget,setBudget] = useState()

export const AddTripForm = () => {
    const departureInput = useRef();

    function validateForm(){
        //submit
    }

    return (
        <Form onButtonPress={() => {console.warn('Form Submited');validateForm}} buttonText="Ajouter">
            <FormItem
                label="Point de Départ"
                isRequired
                value={departure}
                onChangeText={(departure) => setDeparture(departure)}
                asterik
                ref={departureInput}
            />
            <FormItem
                label="Point d'arrivée"
                isRequired
                value={destination}
                onChangeText={(destination) => setDestination(destination)}
                asterik
                ref={destinationInput}
            />
            <FormItem
                label="Date de départ"
                isRequired
                value={date}
                onChangeText={(date) => setDate(date)}
                asterik
                ref={dateInput}
            />
            <FormItem
                label="Heure de départ"
                isRequired
                value={hour}
                onChangeText={(hour) => setHour(hour)}
                asterik
                ref={hourInput}
            />
            <FormItem
                label="Nombre de places"
                isRequired
                value={places}
                onChangeText={(places) => setPlaces(places)}
                asterik
                ref={placesInput}
            />
            <FormItem
                label="Budget"
                isRequired
                value={budget}
                onChangeText={(budget) => setBudget(budget)}
                asterik
                ref={budgetInput}
            />
        </Form>
      );
      
}

const style = StyleSheet.create({
    title:{},
    body:{}
})

export default PlanTripScreen;