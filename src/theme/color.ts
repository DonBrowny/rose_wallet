import { AppColorStrings } from '../schema/color'

const colors = {
  green100: '#F1FFF3',
  green500: '#DFF7E2',
  green900: '#00D09E',
  darkGreen100: '#0E3E3E',
  darkGreen500: '#093030',
  darkGreen900: '#031314',
  blue100: '#6DB6FE',
  blue500: '#3299FF',
  blue900: '#0068FF',
}

export const lightTheme: Record<AppColorStrings, string> = {
  PRIMARY_BG: colors.green100,
  SECONDARY_BG: colors.green900,
  PRIMARY_TEXT_COLOR: colors.darkGreen500,
  SECONDARY_TEXT_COLOR: colors.green500,
  PRIMARY_CTA_COLOR: colors.green900,
  CARD_BG: colors.green900,
  AMT_TEXT_COLOR: colors.blue900,
  PROGRESS_BAR_UNFILLED: colors.blue100,
  PROGRESS_BAR_FILLED: colors.darkGreen100,
  PILL_DEFAULT: colors.green500,
  PILL_PRESSED: colors.green900,
}

export const darkTheme = {}
