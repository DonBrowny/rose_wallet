import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

const CARD_HEIGHT = 500

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
    borderWidth: 1,
    borderBlockColor: light.colors.primaryColor,
    backgroundColor: '#FFF',
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
