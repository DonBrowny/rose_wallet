import type { IconMapKeyType } from './icons'

export interface AddCategoryData {
  name: string
  icon: IconMapKeyType
}

export interface CategoryData extends AddCategoryData {
  id: string
  order: number
}

export type CategoryPositions = {
  [key: string]: {
    updatedOrder: number
    updatedTop: number
  }
}

export type NullableNumber = null | number
