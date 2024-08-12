export enum Screens {
  HOME = 'Home',
  ADD_TRANSACTION = 'AddTransaction',
  TRANSACTION_HISTORY = 'TransactionHistory',
  CATEGORY = 'Category',
}

export type ScreenName = `${Screens}`

export const TAB_ICON_MAP: Record<string, 'home' | 'category' | 'plus' | 'list'> = {
  [Screens.HOME]: 'home',
  [Screens.ADD_TRANSACTION]: 'plus',
  [Screens.TRANSACTION_HISTORY]: 'list',
  [Screens.CATEGORY]: 'category',
}

export interface RoutesProps {
  navigate: (route: string) => void
}
