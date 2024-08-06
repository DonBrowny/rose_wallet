import React, { useCallback, useEffect, useState } from 'react'
import { NativeModules, View } from 'react-native'
import { request, PERMISSIONS } from 'react-native-permissions'
import type { Message, MessageWithTransaction } from '../../schema/sms'
import { getTransactionAmount, getTransactionType, processMessage } from '../../utils/sms-parser'
import { styles } from './sms-reader.styles'
import { SmsContainer } from '../sms-container/sms-container'
import { getAllCategoriesQuery } from '../../utils/query/category-query'
import { Cta } from '../primary-cta/cta'
import { useQuery } from '@tanstack/react-query'
import { getMMKVLoader } from '../../utils/mmkv-service/mmkv-service'
import { useMMKVStorage } from 'react-native-mmkv-storage'
import { MMKV_LAST_PROCESSED_SMS } from '../../schema/mmkv-keys'

const requestPermission = async () => {
  const response = await request(PERMISSIONS.ANDROID.READ_SMS)
  return response === 'granted'
}

// Current timestamp
const now = Date.now()

// Calculate timestamp for 5 days ago
const thirtyDaysAgo = now - 150 * 24 * 60 * 60 * 1000
const defaultFomDate = thirtyDaysAgo.toString()
const storage = getMMKVLoader()

export const SmsReader = () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState<MessageWithTransaction[] | null>(null)
  const { data: category } = useQuery(getAllCategoriesQuery)
  const [fromDate] = useMMKVStorage<string>(MMKV_LAST_PROCESSED_SMS, storage, defaultFomDate)

  useEffect(() => {
    async function getPermission() {
      const permission = await requestPermission()
      setHasPermission(permission)
    }
    getPermission()
  }, [])

  const buttonPressHandler = useCallback(() => {
    if (hasPermission) {
      setIsLoading(true)
      NativeModules.SMSModule.getAllMessages(fromDate, async (messages: Message[]) => {
        const messageWithTransaction = messages.flatMap((message: Message) => {
          const { body } = message
          const processedMessage = processMessage(body)
          const transactionType = getTransactionType(processedMessage)
          if (transactionType && transactionType === 'debit') {
            const amount = getTransactionAmount(processedMessage)
            if (amount) {
              return { ...message, amount: getTransactionAmount(processedMessage) }
            }
            return []
          }
          return []
        })
        setTransactions(messageWithTransaction || [])
        setIsLoading(false)
      })
    } else {
      console.log('Permission denied', 'You need to give permission to access sms')
    }
  }, [fromDate, hasPermission])

  return (
    <View style={styles.container}>
      <SmsContainer
        data={transactions}
        category={category || []}
        loading={isLoading}
      />
      {!transactions ? (
        <Cta
          text='Retrieve SMS'
          onPress={buttonPressHandler}
        />
      ) : null}
    </View>
  )
}
