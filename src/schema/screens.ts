export enum Screens {
  HOME = 'Home',
  ADD_TRANSACTION = 'AddTransaction',
  TRANSACTION_HISTORY = 'TransactionHistory',
}

export type ScreenName = `${Screens}`

export const TAB_ICON_MAP: Record<string, 'home' | 'category' | 'plus'> = {
  [Screens.HOME]: 'home',
  [Screens.ADD_TRANSACTION]: 'plus',
  [Screens.TRANSACTION_HISTORY]: 'category',
}

export interface RoutesProps {
  navigate: (route: string) => void
}
