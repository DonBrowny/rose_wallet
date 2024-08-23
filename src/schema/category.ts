import type { IconMapKeyType } from './icons'

export interface CategoryData {
  id: string
  name: string
  icon: IconMapKeyType
  order: number
}

export type CategoryPositions = {
  [key: string]: {
    updatedOrder: number
    updatedTop: number
  }
}

export type NullableNumber = null | number
