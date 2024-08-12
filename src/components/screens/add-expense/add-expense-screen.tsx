import { View } from 'react-native'
import React from 'react'
import { styles } from './add-expense-screen.styles'
import { SmsReader } from '../../sms-reader/sms-reader'
import { Header } from '../../header/header'

export const AddExpenseScreen = () => {
  return (
    <View style={styles.container}>
      <Header text='Add Expense' />
      <View style={styles.innerContainer}>
        <SmsReader />
      </View>
    </View>
  )
}
