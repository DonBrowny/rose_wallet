import { StyleSheet } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 250,
    padding: 20,
    borderRadius: 24,
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: lightTheme.CARD_BG,
  },
})
