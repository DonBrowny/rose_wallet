import { FlatList, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { styles } from './expense-history.styles'
import { MONTH_PILL_WIDTH } from '../../schema/constants'
import { TransactionTable } from '../../transaction-table/transaction-table'
import { useGetExpenseByMonth } from '../../utils/query/transaction-query'
import { MonthPill } from '../month-pill/month-pill'
import { getAllMonths } from '../../utils/expense-history/gat-all-monts'
import { getMonthYear } from '../../utils/expense-history/get-month-year'

const months = getAllMonths()

export const ExpenseHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState<string>(months.at(-1) || '')
  const { data } = useGetExpenseByMonth(getMonthYear(selectedMonth))
  const flatListRef = useRef<FlatList>(null)
  const onMonthPress = useCallback((month: string) => {
    setSelectedMonth(month)
  }, [])

  const renderPill = useCallback(
    ({ item }: { item: string }) => {
      return (
        <MonthPill
          name={item}
          isActive={item === selectedMonth}
          onPress={onMonthPress}
        />
      )
    },
    [onMonthPress, selectedMonth]
  )

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: months.length - 1,
      })
    }
  }, [])

  const ItemLayout = (_: any, index: number) => ({
    length: MONTH_PILL_WIDTH,
    offset: MONTH_PILL_WIDTH * index,
    index,
  })

  useEffect(() => {
    if (flatListRef.current) {
      const index = months.indexOf(selectedMonth)
      flatListRef.current.scrollToIndex({
        animated: true,
        index,
      })
    }
  }, [selectedMonth])

  return (
    <View style={styles.container}>
      <View style={styles.monthContainer}>
        <FlatList
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          data={months}
          renderItem={renderPill}
          keyExtractor={(item) => item}
          getItemLayout={ItemLayout}
          ref={flatListRef}
          horizontal
          pagingEnabled
        />
      </View>
      <TransactionTable transactions={data || []} />
    </View>
  )
}
