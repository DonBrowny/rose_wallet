import { Animated, Pressable, PressableProps, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './primary-cta.styles'

interface PrimaryCtaProps extends PressableProps {
  text: string
}

export const PrimaryCta = ({ text, onPress }: PrimaryCtaProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current

  function onPressIn() {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start()
  }

  function onPressOut() {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 50,
      useNativeDriver: true,
    }).start()
  }

  return (
    <View>
      <Animated.View style={[styles.container, { transform: [{ scale: scaleValue }] }]}>
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={onPress}
          style={styles.cta}
        >
          <Text>{text}</Text>
        </Pressable>
      </Animated.View>
    </View>
  )
}
