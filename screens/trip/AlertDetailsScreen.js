import { styles } from '../../layout/Style';
import { TripDetails } from '../../components/trip/trip-details';
import { View ,StyleSheet} from 'react-native';
import Header from '../../layout/Header';
import Button from '../../components/common/Button';

export const AlertDetailsScreen = ({route, navigation}) => {
  const alertData = route.params
    return ( 
      <View style={styles.back}>
        <Header screenTitle={"Details of Alert"} navigation={navigation} />
        <TripDetails details={alertData}/>
      </View>
     );
  }
  
