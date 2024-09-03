import React from 'react'
import LottieView from 'lottie-react-native'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../text/text'

export const DoneAnimation = () => {
  return (
    <View style={styles.container}>
      <Text
        textAlign='center'
        styleName='LARGE_SEMI_BOLD'
      >
        All Caught up &#128526; !!
      </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
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
