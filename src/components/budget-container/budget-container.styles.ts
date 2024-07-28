import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 12,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  budgetButton: {
    flexDirection: 'row',
    height: 32,
  },
  budgetContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12,
    columnGap: 8,
  },
  buttonClose: {
    backgroundColor: lightTheme.SECONDARY_CTA_COLOR,
    marginTop: 12,
  },
})
