import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export interface IconPillStyleProps {
  color: string
}

export const ICON_SIZE = 56

export const styles = ({ color }: IconPillStyleProps) =>
  StyleSheet.create({
    container: {
      width: 57,
      height: 53,
      borderRadius: 22,
      backgroundColor: color || lightTheme.SECONDARY_TAB_CTA_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
