import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: lightTheme.CARD_BG,
    marginTop: 24,
    padding: 20,
    gap: 20,
    borderRadius: 50,
    height: '40%',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 32,
    gap: 24,
  },
})
