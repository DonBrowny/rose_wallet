import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

const CARD_HEIGHT = 500

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    width: '100%',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cardStyle: {
    height: CARD_HEIGHT,
    borderRadius: 24,
    borderWidth: 1,
    borderBlockColor: light.colors.primaryColor,
    backgroundColor: '#FFF',
  },
  overlayLabelContainer: {
    width: '100%',
    height: CARD_HEIGHT,
    borderRadius: 16,
  },
  progressView: {
    marginTop: 22,
    marginBottom: 16,
  },
})
