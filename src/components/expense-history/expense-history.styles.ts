import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 38,
    paddingHorizontal: 12,
  },
  monthContainer: {
    marginBottom: 16,
    height: 62,
    borderRadius: 22,
    backgroundColor: lightTheme.PILL_BAR_BG,
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12,
  },
  listContainer: {
    marginHorizontal: 4,
    borderRadius: 25,
    height: 50,
  },
})
