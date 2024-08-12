import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export const styles = (height: number) =>
  StyleSheet.create({
    background: {
      height,
      width: '100%',
      backgroundColor: lightTheme.BUDGET_BAR_UNFILLED,
      borderRadius: height / 2,
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: lightTheme.PROGRESS_BAR_FILLED,
      borderRadius: height / 2,
    },
  })
