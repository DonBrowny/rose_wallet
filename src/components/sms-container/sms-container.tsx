import { View, Text } from 'react-native'
import React from 'react'
import type { MessageWithTransaction } from '../../schema/sms'
import { SmsSwipe } from '../sms-swipe/sms-swipe'
import { styles } from './sms-container.styles'

type SmsContainerProps = { data: MessageWithTransaction[] | null }

export const SmsContainer = ({ data }: SmsContainerProps) => {
  if (!data) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Press the below button to read the transactions from SMS</Text>
      </View>
    )
  }

  if (data?.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No transactions messages found.</Text>
      </View>
    )
  }

  return <SmsSwipe data={data} />
}
