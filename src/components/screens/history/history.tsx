import { View } from 'react-native'
import React from 'react'
import { styles } from './history.styles'
import { ExpenseHistory } from '../../expense-history/expense-history'
import { Header } from '../../header/header'

export const History = () => {
  return (
    <View style={styles.container}>
      <Header text='Expense History' />
      <View style={styles.innerContainer}>
        <ExpenseHistory />
      </View>
    </View>
  )
}
