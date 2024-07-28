import React, { useEffect } from 'react'
import { View } from 'react-native'
import { styles } from './home.styles'
import { Text } from '../../text/text'
import BudgetContainer from '../../budget-container/budget-container'
import {
  useGetCurrentMonthExpense,
  useGetTopNTransactionsWithCategoryQuery,
} from '../../../utils/query/transaction-query'
import { TransactionTable } from '../../../transaction-table/transaction-table'
import { initialSetup } from '../../../utils/initial-setup'

const HOME_SCREEN_TRANSACTIONS = 10

export const HomeScreen = () => {
  const { data: transactions = [] } = useGetTopNTransactionsWithCategoryQuery(HOME_SCREEN_TRANSACTIONS)
  const { data: expense = 0 } = useGetCurrentMonthExpense()

  useEffect(() => {
    ;(async () => {
      await initialSetup()
    })()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styleName='LARGE_SEMI_BOLD'>Budget</Text>
        <BudgetContainer expense={expense} />
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text
            styleName='LARGE_SEMI_BOLD'
            textAlign='center'
          >
            Recent Transactions
          </Text>
        </View>
        <TransactionTable transactions={transactions} />
      </View>
    </View>
  )
}
