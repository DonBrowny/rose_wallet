import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 8,
  },
  budgetContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  amountContainerLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: lightTheme.NEUTRAL_BORDER,
    borderRightWidth: 1,
  },
  amountContainerRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderColor: lightTheme.NEUTRAL_BORDER,
    borderLeftWidth: 1,
  },
})
