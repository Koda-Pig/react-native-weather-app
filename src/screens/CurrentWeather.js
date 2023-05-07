import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from '../utilities/colors'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

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
    message
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0]?.main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempStyles: {
    color: colors.eigengrau,
    fontSize: 48
  },
  feels: {
    color: colors.eigengrau,
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  highLow: {
    color: colors.eigengrau,
    fontSize: 20
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  }
})

export default CurrentWeather
