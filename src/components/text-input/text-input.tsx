import { TextInput as RNTextInput, StyleSheet, TextInputProps } from 'react-native'
import React, { forwardRef } from 'react'
import { styles } from './text-input.styles'
import { lightTheme } from '../../theme/color'

export const TextInput = forwardRef<RNTextInput, TextInputProps>((props: TextInputProps, ref) => {
  const { style } = props
  const container = StyleSheet.compose(styles.container, style)
  return (
    <RNTextInput
      ref={ref}
      style={container}
      placeholderTextColor={lightTheme.PRIMARY_TEXT_INPUT_PLACEHOLDER}
      {...props}
    />
  )
})
