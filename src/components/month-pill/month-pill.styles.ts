import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'
import { MONTH_PILL_WIDTH } from '../../schema/constants'

type MonthPillStyleProps = { isActive: boolean | null }

export const styles = ({ isActive = false }: MonthPillStyleProps) =>
  StyleSheet.create({
    container: {
      width: MONTH_PILL_WIDTH,
      height: 50,
      borderRadius: 18,
      backgroundColor: isActive ? lightTheme.PILL_PRESSED : lightTheme.PILL_BAR_BG,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
