import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './home.styles'
import { Text } from '../../text/text'
import BudgetContainer from '../../budget-container/budget-container'
import { seedDatabase } from '../../../utils/initial-seed'
import { getTopNTransactionsWithCategory } from '../../../utils/query/transaction-query'
import type { TransactionWithCategory } from '../../../schema/sms'
import { TransactionTable } from '../../../transaction-table/transaction-table'

export const HomeScreen = () => {
  const [transactions, setTransactions] = useState<TransactionWithCategory[]>([])

  useEffect(() => {
    ;(async () => {
      await seedDatabase()
      const transactionsData = await getTopNTransactionsWithCategory(5)
      setTransactions(transactionsData)
    })()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styleName='LARGE_SEMI_BOLD'>Budget</Text>
        <BudgetContainer
          budget={25000}
          expense={15270}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text
          styleName='LARGE_SEMI_BOLD'
          textAlign='center'
        >
          Recent Transactions
        </Text>
        <TransactionTable transactions={transactions} />
      </View>
    </View>
  )
}
