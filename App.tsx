import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
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
    marginTop: StatusBar.currentHeight || 0,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
})

export default App
