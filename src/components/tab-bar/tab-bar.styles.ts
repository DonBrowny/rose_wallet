import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    height: 108,
    backgroundColor: lightTheme.PRIMARY_BG,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    backgroundColor: lightTheme.TAB_BG,
    flexDirection: 'row',
  },
})
