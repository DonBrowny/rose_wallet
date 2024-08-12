import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

const CARD_HEIGHT = 250
const CARD_OFFSET = 28

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
    height: CARD_HEIGHT + CARD_OFFSET,
    justifyContent: 'flex-end',
  },
  card: {
    position: 'absolute',
    height: CARD_HEIGHT,
    borderRadius: 24,
    backgroundColor: lightTheme.CARD_BG,
  },
  subItemsContainer: {
    flex: 1,
    marginTop: 16,
    paddingHorizontal: 16,
    rowGap: 16,
  },
  actionCtaContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 12,
  },
  textDescription: {
    flex: 1,
  },
})
