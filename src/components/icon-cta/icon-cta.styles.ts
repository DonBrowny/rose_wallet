import { StyleSheet } from 'react-native'
import { PrimaryCtaStyleProps } from '../primary-cta/primary-cta.styles'

export const ICON_SIZE = 56

export const styles = ({ disabled = false }: PrimaryCtaStyleProps) =>
  StyleSheet.create({
    container: {
      width: ICON_SIZE,
      height: ICON_SIZE,
      borderRadius: ICON_SIZE / 2,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.5 : 1,
    },
  })
