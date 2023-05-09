import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
        icon={item.weather[0].icon}
      />
    )
  }

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/backgrounds/thunderstorm.jpg')}
        style={image}
        imageStyle={{ opacity: 0.5 }}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
