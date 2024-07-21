import { ActivityIndicator, View } from 'react-native'
import React from 'react'
import type { MessageWithTransaction } from '../../schema/sms'
import { SmsSwipe } from '../sms-swipe/sms-swipe'
import { styles } from './sms-container.styles'
import Category from '../../model/category'
import { Text } from '../text/text'
import { lightTheme } from '../../theme/color'

type SmsContainerProps = { data: MessageWithTransaction[] | null; category: Category[]; loading: boolean }

export const SmsContainer = ({ data, category, loading }: SmsContainerProps) => {
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size='large'
          color={lightTheme.PRIMARY_CTA_COLOR}
        />
        <Text styleName='X_MEDIUM_MEDIUM'>Retrieving SMS</Text>
      </View>
    )
  }
  if (!data) {
    return (
      <View style={styles.container}>
        <Text styleName='X_MEDIUM_MEDIUM'>Press the below button to read the transactions from SMS</Text>
      </View>
    )
  }

  if (data?.length === 0) {
    return (
      <View style={styles.container}>
        <Text styleName='X_MEDIUM_MEDIUM'>No transactions messages found.</Text>
      </View>
    )
  }

  return (
    <SmsSwipe
      data={data}
      category={category}
    />
  )
}
