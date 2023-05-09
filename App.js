import Tabs from './src/components/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import colors from './src/utilities/colors'
import { View, StyleSheet } from 'react-native'
import useGetWeather from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'

const App = () => {
  const [loading, error, weather] = useGetWeather()

  console.log(weather)

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={100} color={colors.lightPurple} />
      )}
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
