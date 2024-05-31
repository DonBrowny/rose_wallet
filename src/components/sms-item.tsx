import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import type { MessageWithTransaction } from '../schema/sms'
import { convertTimestampToDisplayTime } from '../utils/time'

type SmsItemProps = { transaction: MessageWithTransaction }

export const SmsItem = ({ transaction }: SmsItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{convertTimestampToDisplayTime(transaction.date)}</Text>
      <Text style={styles.body}>{transaction.body}</Text>
      <Text style={styles.amount}>Expense: {transaction.amount}</Text>
      <View style={styles.buttonRow}>
        <View style={styles.button}>
          <Button title='Correct' />
        </View>
        <View style={styles.button}>
          <Button title='Wrong' />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: 'white',
  },
  body: {
    fontSize: 18,
    color: 'white',
  },
  amount: {
    fontSize: 24,
    color: 'black',
    fontWeight: 900,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 12,
  },
  button: {
    width: '45%',
  },
})
