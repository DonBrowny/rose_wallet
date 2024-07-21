import { FlatList } from 'react-native'
import React, { useCallback } from 'react'
import type { TransactionWithCategory } from '../schema/sms'
import { TransactionRow } from '../components/transaction-row/transaction-row'
import { styles } from './transaction-table.styles'

export const TransactionTable = ({ transactions }: { transactions: TransactionWithCategory[] }) => {
  const renderItem = useCallback(({ item }: { item: TransactionWithCategory }) => {
    return <TransactionRow {...item} />
  }, [])
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}
