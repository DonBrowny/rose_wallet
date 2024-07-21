import React, { useMemo } from 'react'
import { View } from 'react-native'
import { Icon, IconProps } from '../icon/icon'
import { styles } from './icon-pill.styles'
import { lightTheme } from '../../theme/color'

interface IconPillProps extends Pick<IconProps, 'name'> {
  color?: string
}

export const IconPill = ({ name, color }: IconPillProps) => {
  const { container } = useMemo(() => styles({ color: color || lightTheme.PRIMARY_CAT_COLOR }), [color])
  return (
    <View style={container}>
      <Icon
        size={28}
        name={name}
        fill='#FFF'
      />
    </View>
  )
}
