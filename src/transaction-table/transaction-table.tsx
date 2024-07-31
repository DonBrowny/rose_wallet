import { FlatList } from 'react-native'
import React, { useCallback } from 'react'
import type { TransactionWithCategory } from '../schema/sms'
import { TransactionRow } from '../components/transaction-row/transaction-row'
import { styles } from './transaction-table.styles'

interface TransactionTableProps {
  transactions: TransactionWithCategory[]
  ListEmptyComponent?: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const TransactionTable = ({ transactions, ListEmptyComponent }: TransactionTableProps) => {
  const renderItem = useCallback(({ item }: { item: TransactionWithCategory }) => {
    return <TransactionRow {...item} />
  }, [])
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={ListEmptyComponent}
    />
  )
}
