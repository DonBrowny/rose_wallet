import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

const CARD_HEIGHT = 250

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
  },
  cardContainer: {
    width: '90%',
    height: CARD_HEIGHT,
  },
  card: {
    position: 'absolute',
    height: CARD_HEIGHT,
    borderRadius: 24,
    backgroundColor: lightTheme.CARD_BG,
  },
  actionCtaContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    paddingHorizontal: 28,
  },
  progressContainer: {
    width: '100%',
    marginTop: 22,
    marginBottom: 16,
  },
})
