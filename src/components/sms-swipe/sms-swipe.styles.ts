import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cardStyle: {
    width: '100%',
    height: 250,
    borderRadius: 24,
    borderWidth: 1,
    borderBlockColor: light.colors.primaryColor,
    backgroundColor: '#FFF',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
  progressView: {
    height: 8,
    marginTop: 22,
    marginBottom: 16,
    borderRadius: 12,
  },
})
