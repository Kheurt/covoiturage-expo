
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from '../profile/Profile';
import { ProfileNavigator } from '../profile/ProfileNavigator';
import SettingScreen from '../profile/Settings';
import PlanTripScreen from '../trip/PlanTrip';
import { LoginScreen } from '../user/Login'
import { RegistrationScreen } from '../user/Register'
import { SearchScreen } from '../trip/Search'
import { Menu } from '../../layout/Menu';
import { AlertScreen } from './AlertScreen'
import { AlertDetailsScreen } from './AlertScreen'
import { PassengerHomeScreen } from './PassengerHomeScreen'

fontawesome.library.add(faCircle, faHouse, faUser, faGear, faSquarePlus, faMagnifyingGlass, faBars);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeNavigator = () => {
    return ( 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false, }}/>

        <Stack.Screen name="Alerts" component={AlertScreen} options={{ headerShown:false, }}/>
        <Stack.Screen name="AlertDetails" component={AlertDetailsScreen} options={{ headerShown:false, }}/>

        <Stack.Screen name="AlertDetails" component={PassengerHomeScreen} options={{ headerShown:false, }}/>

        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false, }}/>
        <Stack.Screen name="Settings" component={SettingScreen} options={{ headerShown:false, }}/>
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown:false, }}/>
      </Stack.Navigator>
     );
}

function AppTabBar({ state, descriptors, navigation }) {
    return (
      <View style={styles.tabBarView}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const icon = options.iconValue !=undefined ? options.iconValue : "fa-solid fa-circle"
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1 }}
              key={label+'-id'}
            >
              <FontAwesomeIcon icon={icon} style={{ color: isFocused ? '#673ab7' : '#222' }} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
}

export const HomeNavigatorTabs = () => {
    return (
      <Tab.Navigator tabBar={(props) => <AppTabBar {...props} />} screenOptions={{
        tabBarStyle: { position: 'absolute', display: 'none'  },
      }} initialRouteName="HomeTab"
      >
       <Tab.Screen name="HomeTab" component={HomeNavigator} options={{
            tabBarLabel: 'Home', headerShown:false,
            iconValue:"fa-solid fa-house fa-2xl",
            tabBarHideOnKeyboard:true,
          }}
        />
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: 'Search',
            iconValue:"fa-solid fa-magnifying-glass",
            tabBarHideOnKeyboard:true,
          }}
        />
        <Tab.Screen name="Add" component={PlanTripScreen} options={{
          tabBarLabel: 'Settings', headerShown:false,
            iconValue:"fa-solid fa-square-plus fa-2xl",
            tabBarHideOnKeyboard:true,
          }}
        />
        <Tab.Screen name="Profile" component={ProfileNavigator} options={{
            tabBarLabel: 'Profile',
            iconValue:"fa-solid fa-user fa-2xl",
            tabBarHideOnKeyboard:true,
          }}
        />
      </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabBarView: {
      //
      flexDirection: 'row',
      padding: 20,
      paddingBottom: 40,
      paddingLeft: 50,
      //
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#dcc'
    }
  });
  
  
