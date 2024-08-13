import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Icon, IconProps } from '../icon/icon'
import { styles } from './icon-pill.styles'
import { lightTheme } from '../../theme/color'

interface IconPillProps extends Pick<IconProps, 'name'> {
  variant?: 'large' | 'normal'
  color?: string
}

export const IconPill = ({ name, color, variant = 'normal' }: IconPillProps) => {
  const { container } = useMemo(
    () => styles({ color: color || lightTheme.PRIMARY_CAT_COLOR, variant }),
    [color, variant]
  )

  const size = variant === 'large' ? 45 : 28
  return (
    <View style={container}>
      <Icon
        size={size}
        name={name}
        fill='#FFF'
      />
    </View>
  )
}
