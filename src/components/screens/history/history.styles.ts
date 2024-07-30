import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.SECONDARY_BG,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: lightTheme.PRIMARY_BG,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
  },
})
