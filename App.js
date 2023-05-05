import Tabs from './src/components/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import colors from './src/utils/colors'
import { View, StyleSheet } from 'react-native'
import useGetWeather from './src/hooks/useGetWeather'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} color={colors.lightPurple} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
