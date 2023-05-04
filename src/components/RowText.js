import { View, Text } from 'react-native'

const RowText = props => {
  const {
    containerStyles,
    message1Styles,
    message2Styles,
    message1,
    message2
  } = props

  return (
    <View style={containerStyles}>
      <Text style={message1Styles}>{message1}</Text>
      <Text style={message2Styles}>{message2}</Text>
    </View>
  )
}

export default RowText
