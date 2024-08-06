import React, { useEffect, useRef } from 'react'
import { Animated, View } from 'react-native'
import { styles } from './progress-bar.styles'

interface ProgressBarProps {
  progress: number
  height: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, height }) => {
  const { background, progressBar } = styles(height)
  const animation = useRef(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [progress])

  const width = animation.current.interpolate({
    inputRange: [0, 0.01, 1],
    outputRange: ['0%', '0%', '100%'],
    extrapolate: 'clamp',
  })

  return (
    <View style={background}>
      <Animated.View style={[progressBar, { width }]} />
    </View>
  )
}
