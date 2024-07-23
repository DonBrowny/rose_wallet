import { StyleSheet } from 'react-native'
import { lightTheme } from '../../theme/color'

const fontFamily = 'Poppins'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    marginVertical: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    lineHeight: 20,
    borderRadius: 18,
    backgroundColor: lightTheme.PRIMARY_TEXT_INPUT_BG,
    color: lightTheme.PRIMARY_TEXT_COLOR,
    fontFamily: `${fontFamily}-Medium`,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'bottom',
  },
})
