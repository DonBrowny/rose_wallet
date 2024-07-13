import React from 'react'
import { View } from 'react-native'
import type { MessageWithTransaction } from '../../schema/sms'
import { convertTimestampToDisplayTime } from '../../utils/time'
import { styles } from './sms-item.styles'
import { Text } from '../text/text'

type SmsItemProps = { transaction: MessageWithTransaction }

export const SmsItem = ({ transaction }: SmsItemProps) => {
  return (
    <View style={styles.item}>
      <Text
        styleName='SMALL_NORMAL'
        textAlign='left'
      >
        Transaction Details
      </Text>
      <View style={styles.headerContainer}>
        <View style={styles.addressContainer}>
          <Text
            styleName='X_MEDIUM_NORMAL'
            textAlign='left'
          >
            {transaction.address}
          </Text>
          <Text
            styleName='SMALL_NORMAL'
            textAlign='left'
          >
            {convertTimestampToDisplayTime(transaction.date)}
          </Text>
        </View>
        <View style={styles.amountContainer}>
          <Text
            styleName='X_LARGE_SEMI_BOLD'
            color='AMT_TEXT_COLOR'
          >
            {transaction.amount}
          </Text>
        </View>
      </View>
      <Text
        styleName='SMALL_NORMAL'
        textAlign='left'
      >
        Transaction Message
      </Text>
      <Text
        styleName='X_MEDIUM_NORMAL'
        textAlign='left'
      >
        {transaction.body}
      </Text>
    </View>
  )
}
