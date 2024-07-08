import { StyleSheet } from 'react-native'
import { light } from '../../theme/color'

export const styles = StyleSheet.create({
  item: {
    padding: 20,
  },
  header: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 400,
    color: light.colors.textSecondary,
    marginBottom: 12,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  addressContainer: {
    justifyContent: 'center',
    width: '50%',
  },
  amountContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '50%',
  },
  address: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 500,
    color: light.colors.textPrimary,
    marginBottom: 4,
  },
  date: {
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 500,
    color: light.colors.textSecondary,
  },
  body: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 20,
    color: light.colors.textPrimary,
  },
  amount: {
    fontFamily: 'Inter',
    fontSize: 14,
    color: light.colors.dangerColor,
    fontWeight: 500,
    textAlign: 'right',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 12,
  },
  button: {
    width: '45%',
  },
})
