import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'
import { BOTTOM_TAB_HEIGHT } from '../../schema/constants'

export const styles = StyleSheet.create({
  container: {
    height: BOTTOM_TAB_HEIGHT,
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
