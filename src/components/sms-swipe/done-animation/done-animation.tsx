import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, Text, View } from 'react-native'

export const DoneAnimation = () => {
  return (
    <View style={styles.container}>
      <Text>All Caught up!!</Text>
      <LottieView
        source={require('../../../../assets/confetti.json')}
        autoPlay={true}
        loop={false}
        style={styles.lottie}
        resizeMode='cover'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
  },
})
