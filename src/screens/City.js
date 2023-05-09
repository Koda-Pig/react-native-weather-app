import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import IconText from '../components/IconText'
import moment from 'moment'
import { useFonts } from 'expo-font'

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityText,
    cityName,
    countryName,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles
  const { name, country, population, sunrise, sunset } = weatherData
  const [fontsLoaded] = useFonts({
    'source-regular': require('../../assets/fonts/SourceSansPro-Regular.ttf'),
    'source-bold': require('../../assets/fonts/SourceSansPro-Bold.ttf')
  })

  if (fontsLoaded) {
    return (
      <SafeAreaView style={container}>
        <ImageBackground
          source={require('../../assets/backgrounds/city-background.jpg')}
          style={imageLayout}
          imageStyle={{ opacity: 0.5 }}
        >
          <Text style={[cityText, cityName]}>{name}</Text>
          <Text style={[cityText, countryName]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName="user"
              iconColor="white"
              bodyText={'Population: ' + population}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName="sunrise"
              iconColor="white"
              bodyText={moment(sunrise).format('h:mm a')}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName="sunset"
              iconColor="white"
              bodyText={moment(sunset).format('h:mm a')}
              bodyTextStyles={riseSetText}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  imageLayout: {
    flex: 1,
    justifyContent: 'center'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30,
    marginBottom: 20
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'source-bold'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 40
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'white',
    fontFamily: 'source-regular'
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 50
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'source-regular'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
