import { StyleSheet } from 'react-native'
import { light } from '../../../theme/color'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: 24,
    padding: 20,
    gap: 20,
    borderRadius: 32,
  },
  text: {
    textAlign: 'center',
    paddingBottom: 20,
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 16.8,
    color: light.colors.blue900,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    borderRadius: 32,
    gap: 24,
  },
})
