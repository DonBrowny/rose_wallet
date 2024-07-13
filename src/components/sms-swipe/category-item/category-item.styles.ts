import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = ({ isActive = false }: { isActive?: boolean }) =>
  StyleSheet.create({
    container: {
      height: 36,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isActive ? lightTheme.PILL_PRESSED : lightTheme.PILL_DEFAULT,
    },
    button: {
      paddingHorizontal: 16,
    },
  })
