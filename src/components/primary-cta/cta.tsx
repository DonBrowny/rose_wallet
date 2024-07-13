import { Animated, Pressable, PressableProps, ViewStyle } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './primary-cta.styles'
import { Text } from '../text/text'
import type { TextStyleName } from '../text/text.styles'

interface CtaProps extends PressableProps {
  text: string
  style?: ViewStyle
  styleName?: TextStyleName
  ctaStyle?: ViewStyle
}

export const Cta = ({ text, onPress, style, styleName = 'X_MEDIUM_MEDIUM', ctaStyle }: CtaProps) => {
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
        <Text styleName={styleName}>{text}</Text>
      </Pressable>
    </Animated.View>
  )
}
