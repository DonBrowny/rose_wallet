import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = (isFocused: boolean) =>
  StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    tabCta: {
      width: 57,
      height: 53,
      borderRadius: 22,
      backgroundColor: isFocused ? lightTheme.PRIMARY_TAB_CTA_COLOR : lightTheme.SECONDARY_TAB_CTA_COLOR,
    },
  })
