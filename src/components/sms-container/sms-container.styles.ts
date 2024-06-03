import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: light.colors.primaryColor300,
    fontSize: 24,
    fontWeight: 600,
    textAlign: 'center',
  },
})
