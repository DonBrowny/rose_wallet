import type { CategoryData, CategoryPositions } from '../schema/category'
import { SORT_CATEGORY_ITEM_HEIGHT } from '../schema/constants'

export function getInitialPositions(categories: CategoryData[]) {
  return categories
    .sort((a, b) => a.order - b.order)
    .reduce<CategoryPositions>((acc, { id }, i) => {
      return {
        ...acc,
        [id]: {
          updatedOrder: i,
          updatedTop: i * SORT_CATEGORY_ITEM_HEIGHT,
        },
      }
    }, {})
}
