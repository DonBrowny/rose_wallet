import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'
import { ICON_PILL_HEIGHT } from '../../schema/constants'

export interface IconPillStyleProps {
  color: string
}

export const styles = ({ color }: IconPillStyleProps) =>
  StyleSheet.create({
    container: {
      width: 57,
      height: ICON_PILL_HEIGHT,
      borderRadius: 22,
      backgroundColor: color || lightTheme.SECONDARY_TAB_CTA_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
