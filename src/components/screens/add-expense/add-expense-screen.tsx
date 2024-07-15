import { View } from 'react-native'
import React from 'react'
import { styles } from './add-expense-screen.styles'
import { Text } from '../../text/text'
import { SmsReader } from '../../sms-reader/sms-reader'

export const AddExpenseScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          styleName='LARGE_SEMI_BOLD'
          textAlign='center'
        >
          Add Expense
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <SmsReader />
      </View>
    </View>
  )
}
