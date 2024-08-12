import React, { useEffect, useMemo, useState } from 'react'
import { Keyboard, View } from 'react-native'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { styles } from './tab-bar.styles'
import { TabItem } from './tab-item/tab-item'

const ADD_EXPENSE_SCREEN_INDEX = 1

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { index: activeRouteIndex, routes } = state

  const [keyboardStatus, setKeyboardStatus] = useState(false)

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true)
    })
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false)
    })

    return () => {
      showSubscription.remove()
      hideSubscription.remove()
    }
  }, [])

  const items = useMemo(() => {
    return routes.map((route, index) => {
      const label = route.name
      const isFocused = activeRouteIndex === index

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        })

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name, route.params)
        }
      }

      return (
        <TabItem
          key={route.key}
          label={label}
          isFocused={isFocused}
          onPress={onPress}
        />
      )
    })
  }, [activeRouteIndex, navigation, routes])

  if (ADD_EXPENSE_SCREEN_INDEX === activeRouteIndex && keyboardStatus) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>{items}</View>
    </View>
  )
}
