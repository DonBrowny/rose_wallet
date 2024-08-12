import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '../text/text'
import { HEADER_HEIGHT } from '../../schema/constants'

type HeaderProps = { text: string }

export const Header = ({ text }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Text
        styleName='LARGE_SEMI_BOLD'
        textAlign='center'
      >
        {text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
})
