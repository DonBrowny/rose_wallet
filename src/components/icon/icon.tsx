import { StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { IconMap } from './icon-map'

type IconMapKeyType = keyof typeof IconMap
export type IconProps = { name: IconMapKeyType; size?: number | string; fill?: string; style?: StyleProp<ViewStyle> }

export const Icon = ({ name, size = 24, fill = '#000', style }: IconProps) => {
  const Component = IconMap[name]
  return (
    <Component
      fill={fill}
      height={size}
      width={size}
      style={style}
    />
  )
}
