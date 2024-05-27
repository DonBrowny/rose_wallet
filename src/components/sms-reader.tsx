import React, { useCallback, useEffect, useState } from 'react'
import { Button, NativeModules } from 'react-native'
import { request, PERMISSIONS } from 'react-native-permissions'
import { Message } from '../schema/sms'

const requestPermission = async () => {
  const response = await request(PERMISSIONS.ANDROID.READ_SMS)
  return response === 'granted'
}

export const SmsReader = () => {
  const [hasPermission, setHasPermission] = useState(false)

  useEffect(() => {
    async function getPermission() {
      const permission = await requestPermission()
      setHasPermission(permission)
    }
    getPermission()
  }, [])

  const buttonPressHandler = useCallback(() => {
    if (hasPermission) {
      NativeModules.SMSModule.getAllMessages((messages: Message[]) => {
        console.log(
          'SMS Messages',
          messages.map((message: Message) => `${message.address}: ${message.body}`).join('\n')
        )
      })
    } else {
      console.log('Permission denied', 'You need to give permission to access sms')
    }
  }, [hasPermission])

  return (
    <Button
      title='Retrieve SMS'
      onPress={buttonPressHandler}
    />
  )
}
