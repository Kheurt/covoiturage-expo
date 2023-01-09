import { StatusBar } from 'expo-status-bar';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCircle, faHouse, faUser, faGear, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/profile/Profile';
import SettingScreen from './screens/profile/Settings';
import HomeScreen from './screens/home/HomeScreen';
import PlanTripScreen from './screens/trip/PlanTrip';
import { LoginScreen } from './screens/user/Login'
import { RegistrationScreen } from './screens/user/Register'

fontawesome.library.add(faCircle, faHouse, faUser, faGear, faSquarePlus);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {
  return ( 
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
   );
}

//Tab bar renderer
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
            {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function NavigatorTabs() {
  //const tabBarHeight = useBottomTabBarHeight();
  return (
    // <Tab.Navigator>
    <Tab.Navigator tabBar={(props) => <AppTabBar {...props} />} screenOptions={{
      tabBarStyle: { position: 'absolute' },
    }}
    >
      <Tab.Screen name="Account" component={LoginScreen} options={{
          tabBarLabel: 'Login',
          // tabBarIcon: ({ color, size }) => (
          //   <FontAwesomeIcon icon="fa-solid fa-gear" color={'#002244'} size={10} />
          // ),
          iconValue:"fa-solid fa-gear fa-2xl",
          tabBarHideOnKeyboard:true,
        }}
      />
      {/* <Tab.Screen name="Home" icon="fa-solid fa-house" component={HomeScreen} /> */}
      <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          //   <FontAwesomeIcon icon="fa-solid fa-house" color={'#002244'} size={10} />
          // ),
          iconValue:"fa-solid fa-house fa-2xl",
          tabBarHideOnKeyboard:true,
        }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ color, size }) => (
          //   <FontAwesomeIcon icon="fa-solid fa-user" color={'#002244'} size={10} />
          // ),
          iconValue:"fa-solid fa-user fa-2xl",
          tabBarHideOnKeyboard:true,
        }}
      />
      <Tab.Screen name="Add" component={PlanTripScreen} options={{
          tabBarLabel: 'Settings',
          // tabBarIcon: ({ color, size }) => (
          //   <FontAwesomeIcon icon="fa-solid fa-gear" color={'#002244'} size={10} />
          // ),
          iconValue:"fa-solid fa-square-plus fa-2xl",
          tabBarHideOnKeyboard:true,
        }}
      />
      <Tab.Screen name="Register" component={RegistrationScreen} options={{
          tabBarLabel: 'Register',
          // tabBarIcon: ({ color, size }) => (
          //   <FontAwesomeIcon icon="fa-solid fa-gear" color={'#002244'} size={10} />
          // ),
          iconValue:"fa-solid fa-gear fa-2xl",
          tabBarHideOnKeyboard:true,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <NavigatorTabs />
    </NavigationContainer>
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

