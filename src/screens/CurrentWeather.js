import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import colors from '../utilities/colors'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'
import { useFonts } from 'expo-font'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    image
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main

  const [fontsLoaded] = useFonts({
    'source-regular': require('../../assets/fonts/SourceSansPro-Regular.ttf')
  })

  if (fontsLoaded) {
    return (
      <SafeAreaView
        style={[
          wrapper,
          { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
        ]}
      >
        <ImageBackground
          source={require('../../assets/backgrounds/clouds.jpg')}
          style={image}
        >
          <View style={container}>
            {weatherType[weatherCondition]?.icon(150)}
            <Text style={tempStyles}>{Math.round(temp)}°</Text>
            <Text style={feels}>Feels like {Math.round(feels_like)}°</Text>
            <RowText
              containerStyles={highLowWrapper}
              message1Styles={highLow}
              message2Styles={highLow}
              message1={`High: ${Math.round(temp_max)}° `}
              message2={`Low: ${Math.round(temp_min)}°`}
            />
          </View>
          <RowText
            containerStyles={bodyWrapper}
            message1Styles={description}
            message2Styles={message}
            message1={weather[0]?.description}
            message2={weatherType[weatherCondition]?.message}
          />
        </ImageBackground>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  image: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: colors.eigengrau,
    fontSize: 48,
    fontFamily: 'source-regular'
  },
  feels: {
    color: colors.eigengrau,
    fontSize: 30,
    fontFamily: 'source-regular'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: colors.eigengrau,
    fontSize: 20,
    fontFamily: 'source-regular'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43,
    fontFamily: 'source-regular'
  },
  message: {
    fontSize: 25,
    fontFamily: 'source-regular'
  }
})

export default CurrentWeather
