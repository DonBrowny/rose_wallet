import React, { useCallback, useEffect } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './home.styles'
import { Text } from '../../text/text'
import BudgetContainer from '../../budget-container/budget-container'
import {
  useGetCurrentMonthExpense,
  useGetTopNTransactionsWithCategoryQuery,
} from '../../../utils/query/transaction-query'
import { TransactionTable } from '../../../transaction-table/transaction-table'
import { initialSetup } from '../../../utils/initial-setup'
import { EmptyView } from '../../empty-view/empty-view'
import { RoutesProps, Screens } from '../../../schema/screens'

const HOME_SCREEN_TRANSACTIONS = 10

export const HomeScreen = () => {
  const { data: transactions = [] } = useGetTopNTransactionsWithCategoryQuery(HOME_SCREEN_TRANSACTIONS)
  const { data: expense = 0 } = useGetCurrentMonthExpense()
  const navigation = useNavigation<RoutesProps>()

  useEffect(() => {
    ;(async () => {
      await initialSetup()
    })()
  }, [])

  const addTransactionHandler = useCallback(() => {
    navigation.navigate(Screens.ADD_TRANSACTION)
  }, [navigation])

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
        <TransactionTable
          transactions={transactions}
          ListEmptyComponent={
            <EmptyView
              text='No Transaction Found'
              btnText='Add Transaction'
              onPress={addTransactionHandler}
            />
          }
        />
      </View>
    </View>
  )
}
