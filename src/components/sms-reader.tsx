import React, { useCallback, useEffect, useState } from 'react'
import { Button, NativeModules, StyleSheet, View } from 'react-native'
import { request, PERMISSIONS } from 'react-native-permissions'
import uuid from 'react-native-uuid'
import type { Message, MessageWithTransaction } from '../schema/sms'
import { getTransactionAmount, getTransactionType, processMessage } from '../utils/sms-parser'
import { SmsSwipe } from './sms-swipe'

const requestPermission = async () => {
  const response = await request(PERMISSIONS.ANDROID.READ_SMS)
  return response === 'granted'
}

// Current timestamp
var now = Date.now()

// Calculate timestamp for 30 days ago
var thirtyDaysAgo = now - 30 * 24 * 60 * 60 * 1000

export const SmsReader = () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState<MessageWithTransaction[]>([])

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
      NativeModules.SMSModule.getAllMessages(String(thirtyDaysAgo), (messages: Message[]) => {
        const messageWithTransaction = messages.flatMap((message: Message) => {
          const { body, date } = message
          const processedMessage = processMessage(body)
          const transactionType = getTransactionType(processedMessage)
          if (transactionType && transactionType === 'debit') {
            const amount = getTransactionAmount(processedMessage)
            if (amount) {
              return { id: uuid.v4().toString(), body, date, amount: getTransactionAmount(processedMessage) }
            }
            return []
          }
          return []
        })
        setTransactions(messageWithTransaction)
        setIsLoading(false)
      })
    } else {
      console.log('Permission denied', 'You need to give permission to access sms')
    }
  }, [hasPermission])

  return (
    <View style={styles.container}>
      <View>
        <Button
          title='Retrieve SMS'
          onPress={buttonPressHandler}
        />
      </View>
      <SmsSwipe data={transactions} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
})
