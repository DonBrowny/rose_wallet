import { TextInput as RNTextInput, TextInputProps } from 'react-native'
import React, { forwardRef } from 'react'
import { styles } from './text-input.styles'
import { lightTheme } from '../../theme/color'

export const TextInput = forwardRef<RNTextInput, TextInputProps>((props: TextInputProps, ref) => {
  const { style } = props
  return (
    <RNTextInput
      ref={ref}
      style={[styles.container, style]}
      placeholderTextColor={lightTheme.PRIMARY_TEXT_INPUT_PLACEHOLDER}
      {...props}
    />
  )
})
