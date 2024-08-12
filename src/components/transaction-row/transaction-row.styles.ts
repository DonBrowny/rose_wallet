import { StyleSheet } from 'react-native'
import { ICON_PILL_HEIGHT } from '../../schema/constants'
import { lightTheme } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 12,
    alignItems: 'center',
    height: ICON_PILL_HEIGHT,
  },
  category: {
    width: 106,
    height: '85%',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderColor: lightTheme.TABLE_BORDER,
  },
  description: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  amount: {
    width: 80,
    height: '85%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderColor: lightTheme.TABLE_BORDER,
  },
})
