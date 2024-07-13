import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  item: {
    padding: 20,
    overflow: 'hidden',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
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
})
