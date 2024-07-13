import { StyleSheet, TextStyle } from 'react-native'

const fontFamily = 'Poppins'

const xLarge: TextStyle = {
  fontSize: 24,
}

const large: TextStyle = {
  fontSize: 20,
}

const xMedium: TextStyle = {
  fontSize: 16,
}

const medium: TextStyle = {
  fontSize: 14,
}

const small: TextStyle = {
  fontSize: 12,
}

export const styles = StyleSheet.create({
  X_LARGE_BOLD: {
    ...xLarge,
    fontWeight: 'bold',
    fontFamily: `${fontFamily}-Bold`,
  },
  X_LARGE_SEMI_BOLD: {
    ...xLarge,
    fontWeight: 'semibold',
    fontFamily: `${fontFamily}-SemiBold`,
  },
  LARGE_BOLD: {
    ...large,
    fontWeight: 'bold',
    fontFamily: `${fontFamily}-Bold`,
  },
  LARGE_SEMI_BOLD: {
    ...large,
    fontWeight: 'semibold',
    fontFamily,
  },
  LARGE_NORMAL: {
    ...large,
    fontFamily,
  },
  MEDIUM_BOLD: {
    ...medium,
    fontWeight: 'bold',
    fontFamily: `${fontFamily}-Bold`,
  },
  MEDIUM_SEMI_BOLD: {
    ...medium,
    fontWeight: 'semibold',
    fontFamily,
  },
  MEDIUM_NORMAL: {
    ...medium,
    fontFamily,
  },
  X_MEDIUM_BOLD: {
    ...xMedium,
    fontWeight: 'bold',
    fontFamily: `${fontFamily}-Bold`,
  },
  X_MEDIUM_SEMI_BOLD: {
    ...xMedium,
    fontWeight: 'semibold',
    fontFamily,
  },
  X_MEDIUM_MEDIUM: {
    ...xMedium,
    fontFamily: `${fontFamily}-Medium`,
  },
  X_MEDIUM_NORMAL: {
    ...xMedium,
    fontFamily,
  },
  SMALL_BOLD: {
    ...small,
    fontWeight: 'bold',
    fontFamily: `${fontFamily}-Bold`,
  },
  SMALL_SEMI_BOLD: {
    ...small,
    fontWeight: 'semibold',
    fontFamily,
  },
  SMALL_NORMAL: {
    ...small,
    fontFamily,
  },
})

export type TextStyleName = keyof typeof styles
