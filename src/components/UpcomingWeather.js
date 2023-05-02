import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import pastelColors from '../utils/colors'

const DATA = [
  {
    dt: 1661875200,
    main: {
      temp: 296.34,
      feels_like: 296.02,
      temp_min: 296.34,
      temp_max: 298.24,
      pressure: 1015,
      sea_level: 1015,
      grnd_level: 933,
      humidity: 50,
      temp_kf: -1.9
    },
    weather: [
      {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        icon: '10d'
      }
    ],
    clouds: {
      all: 97
    },
    wind: {
      speed: 1.06,
      deg: 66,
      gust: 2.16
    },
    visibility: 10000,
    pop: 0.32,
    rain: {
      '1h': 0.13
    },
    sys: {
      pod: 'd'
    },
    dt_txt: '2022-08-30 16:00:00'
  }
]

const Item = props => {
  const { dt_txt, min, max, condition } = props
  return (
    <View>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text>{dt_txt}</Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}

const UpcomingWeather = () => {
  const renderItem = ({ item }) => {
    return (
      <Item
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
      <FlatList data={DATA} renderItem={renderItem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default UpcomingWeather
