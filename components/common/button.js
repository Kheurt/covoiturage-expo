import { View, Text } from "react-native";
import { styles } from '../../layout/Style'

function Button() {
    return ( 
        <View style={styles.button}>
          <Text style={styles.buttonText}>send</Text>
        </View>
     );
}

export default Button;