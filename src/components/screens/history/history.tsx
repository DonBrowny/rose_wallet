import { View } from 'react-native'
import React from 'react'
import { Text } from '../../text/text'
import { styles } from './history.styles'
import { ExpenseHistory } from '../../expense-history/expense-history'

export const History = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text
          styleName='LARGE_SEMI_BOLD'
          textAlign='center'
        >
          Expense History
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <ExpenseHistory />
      </View>
    </View>
  )
}
