import { TextInput as RNTextInput, TextInputProps } from 'react-native'
import React from 'react'
import { styles } from './text-input.styles'
import { lightTheme } from '../../theme/color'

export const TextInput = (props: TextInputProps) => {
  const { style } = props
  return (
    <RNTextInput
      style={[styles.container, style]}
      placeholderTextColor={lightTheme.PRIMARY_TEXT_INPUT_PLACEHOLDER}
      {...props}
    />
  )
}
