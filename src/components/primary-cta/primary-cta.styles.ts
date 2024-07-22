import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export type PrimaryCtaStyleProps = { disabled: boolean | null }

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: lightTheme.PRIMARY_CTA_COLOR,
    height: 45,
  },
  cta: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
