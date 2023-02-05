import { Button, Text, View, StyleSheet } from "react-native";
import { styles } from "../../layout/Style";

export const TripDetails = (props) => {
    return ( 
        <View style={styles.blockDetails}>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Départ</Text>
                <Text style={styles.blockSubTitle}>{props.departure || 'Melen - Yaoundé'}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Destination</Text>
                <Text style={styles.blockSubTitle}>{props.arrival || 'Bonamoussadi - Douala'}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Date</Text>
                <Text style={styles.blockSubTitle}>{props.departure || '10/03/2023'}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Heure</Text>
                <Text style={styles.blockSubTitle}>{props.hour || '11 AM - 05 PM'}</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Nombre de places</Text>
                <Text style={styles.blockSubTitle}>{props.nbr_places || 10} places</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Prix</Text>
                <Text style={styles.blockSubTitle}>{props.price || 5000} Fcfa /place</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Nombre de réservation</Text>
                <Text style={styles.blockSubTitle}>{props.nbr_bookings || 3} places</Text>
            </View>
            <View style={styles.block}>
                <Text style={styles.blockTitle}>Nombre de confirmation</Text>
                <Text style={styles.blockSubTitle}>{props.nbr_booking_confirm || 2} places</Text>
            </View>
            <Button title="Annuler" />
        </View>
     );
}

