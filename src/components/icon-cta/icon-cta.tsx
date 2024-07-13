import { Animated, Pressable, PressableProps, View } from 'react-native'
import React, { useRef } from 'react'
import { Icon, IconProps } from '../icon/icon'
import { ICON_SIZE, styles } from './icon-cta.styles'

interface IconCtaProps extends Pick<IconProps, 'name'>, Pick<PressableProps, 'onPress' | 'disabled'> {}

export const IconCta = ({ onPress, name, disabled = false }: IconCtaProps) => {
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
      <Animated.View style={[styles({ disabled }).container, { transform: [{ scale: scaleValue }] }]}>
        <Pressable
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={onPress}
          disabled={disabled}
        >
          <Icon
            name={name}
            size={ICON_SIZE}
          />
        </Pressable>
      </Animated.View>
    </View>
  )
}
