import { StatusBar, StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.PRIMARY_BG,
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight || 0,
    paddingBottom: 16,
  },
})
