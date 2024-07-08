import { Animated, Pressable, PressableProps, Text, TextStyle, ViewStyle } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './primary-cta.styles'

interface CtaProps extends PressableProps {
  text: string
  style?: ViewStyle
  textStyle?: TextStyle
  ctaStyle?: ViewStyle
}

export const Cta = ({ text, onPress, style, textStyle, ctaStyle }: CtaProps) => {
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
    <Animated.View style={[styles.container, style, { transform: [{ scale: scaleValue }] }]}>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}
        style={[styles.cta, ctaStyle]}
      >
        <Text style={textStyle}>{text}</Text>
      </Pressable>
    </Animated.View>
  )
}
