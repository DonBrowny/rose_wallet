import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { SmsReader } from './src/components/sms-reader'

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <SmsReader />
      </View>
    </SafeAreaView>
  )
}

export default App
