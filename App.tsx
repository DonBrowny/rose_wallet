import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { SmsReader } from './src/components/sms-reader'

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SmsReader />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})

export default App
