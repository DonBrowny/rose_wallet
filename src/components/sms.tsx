import React, { useCallback, useEffect, useState } from 'react'
import { Button, NativeModules, AppState } from 'react-native'
import { request, PERMISSIONS } from 'react-native-permissions'

interface Message {
  id: string
  address: string
  body: string
  date: string
}

const requestPermission = async () => {
  const response = await request(PERMISSIONS.ANDROID.READ_SMS)
  return response === 'granted'
}

export const SMSComponent = () => {
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
        if (AppState.currentState === 'active') {
          console.log(
            'SMS Messages',
            messages.map((message: Message) => `${message.address}: ${message.body}`).join('\n')
          )
        }
      })
    } else {
      if (AppState.currentState === 'active') {
        console.log('Permission denied', 'You need to give permission to access sms')
      }
    }
  }, [hasPermission])

  // async function requestSmsPermission() {
  //   try {
  //     const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_SMS, {
  //       title: 'SMS Read Permission',
  //       message: 'Your app needs access to your SMS to read them.',
  //       buttonPositive: 'Ok',
  //       buttonNegative: 'Cancel',
  //     })
  //     return granted === PermissionsAndroid.RESULTS.GRANTED
  //   } catch (err) {
  //     console.warn(err)
  //     return false
  //   }
  // }

  return (
    <Button
      title='Retrieve SMS'
      onPress={buttonPressHandler}
    />
  )
}
