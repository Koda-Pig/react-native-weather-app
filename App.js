import Tabs from './src/components/Tabs'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator } from 'react-native'
import { useState, useEffect } from 'react'
import colors from './src/utils/colors'
import { View, StyleSheet } from 'react-native'
import * as Location from 'expo-location'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
    })()
  }, [])

  if (location) {
    console.log(location)
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={100} color={colors.lightPurple} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App
