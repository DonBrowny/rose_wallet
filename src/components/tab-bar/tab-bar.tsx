import React, { useMemo } from 'react'
import { View } from 'react-native'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { styles } from './tab-bar.styles'
import { TabItem } from './tab-item/tab-item'

export const TabBar = ({ state, navigation }: BottomTabBarProps) => {
  const { index: activeRouteIndex, routes } = state

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

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>{items}</View>
    </View>
  )
}
