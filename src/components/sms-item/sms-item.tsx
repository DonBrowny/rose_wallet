import React from 'react'
import { Button, Text, View } from 'react-native'
import type { MessageWithTransaction } from '../../schema/sms'
import { convertTimestampToDisplayTime } from '../../utils/time'
import { styles } from './sms-item.styles'

type SmsItemProps = { transaction: MessageWithTransaction }

export const SmsItem = ({ transaction }: SmsItemProps) => {
  return (
    <View style={styles.item}>
      <Text style={styles.header}>Transaction Details</Text>
      <View style={styles.headerContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{transaction.address}</Text>
          <Text style={styles.date}>{convertTimestampToDisplayTime(transaction.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>Expense: {transaction.amount}</Text>
        </View>
      </View>
      <Text style={styles.header}>Transaction Message</Text>
      <Text style={styles.body}>{transaction.body}</Text>
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
