import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

export type PrimaryCtaStyleProps = { disabled: boolean | null }

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 100,
    backgroundColor: light.colors.primaryColor,
    height: 62,
  },
  cta: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 600,
    color: light.colors.primaryBgColor,
  },
})
