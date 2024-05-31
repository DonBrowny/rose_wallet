import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import type { MessageWithTransaction } from '../schema/sms'
import { SmsItem } from './sms-item'

type SmsListProps = { data: MessageWithTransaction[] }

export const SmsList = ({ data }: SmsListProps) => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={({ item }) => <SmsItem transaction={item} />}
      />
    </ScrollView>
  )
}
