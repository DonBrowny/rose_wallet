import { StyleSheet } from 'react-native'
import { light } from '../../../theme/color'

export const styles = ({ isActive = false }: { isActive?: boolean }) =>
  StyleSheet.create({
    container: {
      height: 34,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: light.colors.blue100,
      borderWidth: 2,
      borderColor: isActive ? light.colors.blue500 : light.colors.blue100,
    },
    button: {
      paddingHorizontal: 16,
    },
    text: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 600,
      color: light.colors.blue500,
    },
  })
