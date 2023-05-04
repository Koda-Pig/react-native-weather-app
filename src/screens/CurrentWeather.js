import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import colors from '../utils/colors'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const {
    wrapper,
    container,
    temp,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message
  } = styles

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>5</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          containerStyles={highLowWrapper}
          message1Styles={highLow}
          message2Styles={highLow}
          message1="High: 8 "
          message2="Low: 2"
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        message1Styles={description}
        message2Styles={message}
        message1="Sunny"
        message2={weatherType.Clear.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightPurple
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
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
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
