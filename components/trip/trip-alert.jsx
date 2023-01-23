import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View, Button, Image } from 'react-native';

fontawesome.library.add(faArrowRight);

function TripAlert({title, subtitle, avatar}) {
    //let avatarUrl = `../../assets/${avatar || 'avatar'}.png`
    let avatarSource = require('../../assets/avatar.jpg')
    return ( 
        <View>
            <View>
                <Image source={avatarSource} />
            </View>
            <View>
                <Text>{title || "Titre"}</Text>
                <Text> {subtitle || "Sous titre"} </Text>
            </View>
            <View>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    tripalert: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default TripAlert;