import { View, Text, StyleSheet } from 'react-native'
import colors from '../utilities/colors'
import { weatherType } from '../utilities/weatherType'
import moment from 'moment'

const ListItem = props => {
  const { dt_txt, min, max, condition } = props
  const { item, dateTextWrapper, date, temp } = styles

  return (
    <View style={item}>
      {weatherType[condition]?.icon(80)}
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

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: colors.red,
    borderColor: colors.lightPurple
  },
  dateTextWrapper: {
    flexDirection: 'column'
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  temp: {
    color: 'white',
    fontSize: 20
  }
})

export default ListItem
