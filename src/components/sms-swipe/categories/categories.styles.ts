import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderBlockColor: lightTheme.CARD_BG,
    marginTop: 24,
    padding: 20,
    gap: 20,
    borderRadius: 50,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 32,
    gap: 24,
  },
})
