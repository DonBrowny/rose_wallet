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
  neutral: '#FFFFFF',
}

export const lightTheme: Record<AppColorStrings, string> = {
  PRIMARY_BG: colors.green100,
  SECONDARY_BG: colors.green900,
  PRIMARY_TEXT_COLOR: colors.darkGreen500,
  SECONDARY_TEXT_COLOR: colors.green500,
  PRIMARY_CTA_COLOR: colors.green900,
  SECONDARY_CTA_COLOR: colors.green500,
  CARD_BG: colors.green900,
  AMT_TEXT_COLOR: colors.blue900,
  PROGRESS_BAR_UNFILLED: colors.blue100,
  PROGRESS_BAR_FILLED: colors.darkGreen100,
  BUDGET_BAR_UNFILLED: colors.neutral,
  PILL_DEFAULT: colors.green500,
  PILL_PRESSED: colors.green900,
  TAB_BG: colors.green500,
  PRIMARY_TAB_CTA_COLOR: colors.green900,
  SECONDARY_TAB_CTA_COLOR: colors.green500,
  BUDGET_TEXT_COLOR: colors.neutral,
  NEUTRAL_BORDER: colors.neutral,
  PRIMARY_CAT_COLOR: colors.blue900,
  PRIMARY_TEXT_INPUT_BG: colors.green500,
  PRIMARY_TEXT_INPUT_PLACEHOLDER: colors.green900,
  PILL_BAR_BG: colors.green500,
  TABLE_BORDER: colors.green900,
}

export const darkTheme = {}
