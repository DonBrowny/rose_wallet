import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'
import { ICON_PILL_HEIGHT } from '../../schema/constants'

export interface IconPillStyleProps {
  color: string
  variant: 'large' | 'normal'
}

export const ICON_SIZE = 56

export const styles = ({ color, variant }: IconPillStyleProps) =>
  StyleSheet.create({
    container: {
      width: variant === 'large' ? 105 : 57,
      height: variant === 'large' ? 98 : ICON_PILL_HEIGHT,
      borderRadius: variant === 'large' ? 26 : 22,
      backgroundColor: color || lightTheme.SECONDARY_TAB_CTA_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
