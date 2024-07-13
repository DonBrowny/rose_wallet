import { Text as RnText, TextProps as RnTextProps } from 'react-native'
import React, { useMemo } from 'react'
import { styles, TextStyleName } from './text.styles'
import { lightTheme } from '../../theme/color'
import type { AppColorStrings } from '../../schema/color'

interface TextProps extends RnTextProps {
  styleName: TextStyleName
  color?: AppColorStrings
  textAlign?: 'left' | 'center' | 'right'
}

export const Text = ({ styleName, color = 'PRIMARY_TEXT_COLOR', textAlign, ...props }: TextProps) => {
  const style = useMemo(() => {
    return { ...styles[styleName], color: lightTheme[color], textAlign }
  }, [color, styleName, textAlign])

  return (
    <RnText
      style={style}
      {...props}
    >
      {props.children}
    </RnText>
  )
}
