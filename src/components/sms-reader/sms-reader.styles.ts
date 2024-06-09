import { StatusBar, StyleSheet } from 'react-native'
import { light } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.colors.primaryBgColor,
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight || 0,
    paddingBottom: 16,
  },
})
