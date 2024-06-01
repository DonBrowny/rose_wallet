import { Animated, Pressable, PressableProps, Text, View } from 'react-native'
import React from 'react'
import { styles } from './primary-cta.styles'

interface PrimaryCtaProps extends PressableProps {
  text: string
}

export const PrimaryCta = ({ text, onPress }: PrimaryCtaProps) => {
  const animation = new Animated.Value(0)
  const inputRange = [0, 1]
  const outputRange = [1, 0.9]
  const scale = animation.interpolate({ inputRange, outputRange })

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }
  return (
    <View>
      <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={onPress}
          style={styles.cta}
        >
          <Text style={styles.text}>{text}</Text>
        </Pressable>
      </Animated.View>
    </View>
  )
}
