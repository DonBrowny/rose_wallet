import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { styles } from './home.styles'
import { Text } from '../../text/text'
import BudgetContainer from '../../budget-container/budget-container'
import { seedDatabase } from '../../../utils/initial-seed'
import {
  getTopNTransactionsWithCategory,
  getTotalAmount,
  getTransactionByMonth,
} from '../../../utils/query/transaction-query'
import type { TransactionWithCategory } from '../../../schema/sms'
import { TransactionTable } from '../../../transaction-table/transaction-table'

const HOME_SCREEN_TRANSACTIONS = 10

export const HomeScreen = () => {
  const [transactions, setTransactions] = useState<TransactionWithCategory[]>([])
  const [expense, setExpense] = useState<number>(0)

  useEffect(() => {
    ;(async () => {
      await seedDatabase()
      const now = new Date()
      const transactionsData = await getTopNTransactionsWithCategory(HOME_SCREEN_TRANSACTIONS)
      const thisMonthTransaction = await getTransactionByMonth(now.getMonth() + 1, now.getFullYear())
      setTransactions(transactionsData)
      setExpense(getTotalAmount(thisMonthTransaction))
    })()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styleName='LARGE_SEMI_BOLD'>Budget</Text>
        <BudgetContainer
          budget={25000}
          expense={expense}
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
