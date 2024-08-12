import React, { forwardRef, useRef, useImperativeHandle, useEffect, useMemo } from 'react'
import { Animated, Dimensions } from 'react-native'
import type { MessageWithTransaction } from '../../../schema/sms'
import { SmsItem } from '../../sms-item/sms-item'
import { styles } from './sms-animated-card.styles'
const { width } = Dimensions.get('window')

export type SmsAnimationDirection = 'left' | 'right'

export interface SmsAnimatedCardRef {
  swipe: (dir: SmsAnimationDirection) => void
}

export const SmsAnimatedCard = forwardRef<
  SmsAnimatedCardRef,
  {
    activeIndex: number
    currentIndex: number
    totalLength: number
    transaction: MessageWithTransaction
    onCardLeftScreen: (id: string) => void
  }
>((props, ref) => {
  const { activeIndex, currentIndex, totalLength, transaction, onCardLeftScreen } = props
  const animation = useRef(new Animated.Value(currentIndex - activeIndex))
  const swipeAnimation = useRef(new Animated.Value(0)).current

  const swipe = (dir: 'left' | 'right') => {
    Animated.timing(swipeAnimation, {
      toValue: dir === 'left' ? width * -1 : width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onCardLeftScreen(transaction.id))
  }

  useImperativeHandle(ref, () => ({
    async swipe(dir) {
      await swipe(dir)
    },
  }))

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: currentIndex - activeIndex,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [activeIndex, currentIndex])

  const scale = animation.current.interpolate({
    inputRange: [0, totalLength - 1],
    outputRange: [1, 0.8],
    extrapolate: 'clamp',
  })
  const zIndex = animation.current.interpolate({
    inputRange: [0, totalLength],
    outputRange: [totalLength + 1, 1],
    extrapolate: 'clamp',
  })
  const translateY = animation.current.interpolate({
    inputRange: [0, totalLength - 1],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  })

  const animatedStyle = useMemo(
    () => ({
      zIndex,
      transform: [{ scale: scale }, { translateY }, { translateX: swipeAnimation }],
    }),
    [scale, swipeAnimation, translateY, zIndex]
  )

  // console.log({ activeIndex, currentIndex, zIndex, scale, translateY })

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}
      key={transaction.id}
    >
      <SmsItem transaction={transaction} />
    </Animated.View>
  )
})
