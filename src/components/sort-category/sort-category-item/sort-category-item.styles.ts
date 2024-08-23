import { StyleSheet } from 'react-native'
import { SORT_CATEGORY_ITEM_HEIGHT } from '../../../schema/constants'
import { lightTheme } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    height: SORT_CATEGORY_ITEM_HEIGHT - 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: lightTheme.TABLE_BORDER,
    borderRadius: 22,
    columnGap: 12,
    backgroundColor: lightTheme.PRIMARY_BG,
  },
  text: {
    flex: 1,
  },
  draggerContainer: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginBottom: {
    marginBottom: 8,
  },
  dragger: {
    width: '100%',
    height: 2,
    borderRadius: 1,
    backgroundColor: lightTheme.PRIMARY_CTA_COLOR,
  },
})
