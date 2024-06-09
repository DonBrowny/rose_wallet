import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { SmsReader } from './src/components/sms-reader/sms-reader'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <SmsReader />
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
