import { View } from 'react-native'
import React from 'react'
import { TransactionWithCategory } from '../../schema/sms'
import { IconPill } from '../icon-pill/icon-pill'
import { Text } from '../text/text'
import { styles } from './transaction-row.styles'
import { formatDisplayDate } from '../../utils/formatter/format-display-date'

export const TransactionRow = ({ amount, icon, transDate, categoryName }: TransactionWithCategory) => {
  return (
    <View style={styles.container}>
      <IconPill
        key={icon}
        name={icon}
      />
      <View style={styles.category}>
        <Text styleName='SMALL_NORMAL'>{categoryName}</Text>
        <Text
          styleName='SMALL_BOLD'
          color='AMT_TEXT_COLOR'
        >
          {formatDisplayDate(transDate)}
        </Text>
      </View>
      <Text styleName='X_MEDIUM_MEDIUM'>{amount}</Text>
    </View>
  )
}
