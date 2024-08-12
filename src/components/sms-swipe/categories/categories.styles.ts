import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: lightTheme.CARD_BG,
    padding: 12,
    gap: 20,
    borderRadius: 50,
    overflow: 'hidden',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 32,
    gap: 24,
  },
})
