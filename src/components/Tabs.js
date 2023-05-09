import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import colors from '../utilities/colors'
import { useFonts } from 'expo-font'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  const [fontsLoaded] = useFonts({
    'source-regular': require('../../assets/fonts/SourceSansPro-Regular.ttf'),
    'source-bold': require('../../assets/fonts/SourceSansPro-Bold.ttf')
  })

  const TabStyles = {
    tabBarLabelStyle: {
      fontSize: 16,
      fontFamily: 'source-regular'
    }
  }

  if (fontsLoaded) {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.red,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: colors.lighterPurple,
            height: 55
          },
          headerStyle: {
            backgroundColor: colors.lighterPurple
          },
          headerTitleStyle: {
            fontSize: 25,
            color: colors.eigengrau,
            fontFamily: 'source-bold'
          },
          headerTitleAlign: 'center'
        }}
      >
        <Tab.Screen
          name="Current"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="droplet"
                size={25}
                color={focused ? colors.red : colors.eigengrau}
              />
            ),
            ...TabStyles
          }}
        >
          {() => <CurrentWeather weatherData={weather.list[0]} />}
        </Tab.Screen>
        <Tab.Screen
          name="Upcoming"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="clock"
                size={25}
                color={focused ? colors.red : colors.eigengrau}
              />
            ),
            ...TabStyles
          }}
        >
          {() => <UpcomingWeather weatherData={weather.list} />}
        </Tab.Screen>
        <Tab.Screen
          name="City"
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name="home"
                size={25}
                color={focused ? colors.red : colors.eigengrau}
              />
            ),
            ...TabStyles
          }}
        >
          {() => <City weatherData={weather.city} />}
        </Tab.Screen>
      </Tab.Navigator>
    )
  }
}

export default Tabs
