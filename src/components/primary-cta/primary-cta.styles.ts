import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 100,
    backgroundColor: light.colors.primaryColor,
  },
  cta: {
    width: '100%',
    height: 62,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    color: light.colors.backgroundColor,
  },
})
