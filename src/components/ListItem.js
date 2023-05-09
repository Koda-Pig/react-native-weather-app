import { View, Text, StyleSheet } from 'react-native'
import colors from '../utilities/colors'
import { weatherIcon } from '../utilities/weatherType'
import moment from 'moment'
import { useFonts } from 'expo-font'

const ListItem = props => {
  const { dt_txt, min, max, icon } = props
  const { item, dateTextWrapper, date, temp } = styles
  const [fontsLoaded] = useFonts({
    'source-regular': require('../../assets/fonts/SourceSansPro-Regular.ttf')
  })

  if (fontsLoaded) {
    return (
      <View style={item}>
        {weatherIcon(icon, 80)}
        <View style={dateTextWrapper}>
          <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={date}>{moment(dt_txt).format('h:mm a')}</Text>
        </View>
        <Text style={temp}>
          {Math.round(min)}° / {Math.round(max)}°
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'rgba(22, 22, 29, 0.6)',
    borderColor: colors.lightPurple,
    borderRadius: 10
  },
  dateTextWrapper: {
    flexDirection: 'column'
  },
  date: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'source-regular'
  },
  temp: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'source-regular'
  }
})

export default ListItem
