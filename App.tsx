import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { SmsReader } from './src/components/sms-reader/sms-reader'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <SmsReader />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App
