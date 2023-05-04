import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import colors from '../utils/colors'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.red,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: colors.lighterPurple
        },
        headerStyle: {
          backgroundColor: colors.lighterPurple
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: colors.eigengrau
        },
        headerTitleAlign: 'center'
      }}
    >
      <Tab.Screen
        name="Current"
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="droplet"
              size={25}
              color={focused ? colors.red : colors.eigengrau}
            />
          )
        }}
      />
      <Tab.Screen
        name="Upcoming"
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="clock"
              size={25}
              color={focused ? colors.red : colors.eigengrau}
            />
          )
        }}
      />
      <Tab.Screen
        name="City"
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={25}
              color={focused ? colors.red : colors.eigengrau}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
