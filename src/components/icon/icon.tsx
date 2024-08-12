import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { IconMap } from './icon-map'
import { IconMapKeyType } from '../../schema/icons'

export type IconProps = {
  name: IconMapKeyType
  size?: number | string
  fill?: string
  stroke?: string
  style?: StyleProp<ViewStyle>
}

export const Icon = ({ name, size = 24, fill = 'none', stroke = 'none', style }: IconProps) => {
  const Component = IconMap[name]
  return (
    <Component
      fill={fill}
      stroke={stroke}
      height={size}
      width={size}
      style={style}
    />
  )
}
