import Category from '../../model/category'
import type { CategoryData } from '../../schema/category'
import { TableName } from '../../schema/tables'
import { database } from '../db'
import { useReactNavigationQuery } from './react-navigation-query'

const categoryCollection = database.collections.get<Category>(TableName.CATEGORY)

export const getAllCategories = async () => {
  const categories = await categoryCollection.query().fetch()
  return categories
}

// const addCategory = async (name: string) => {
//   await database.write(async () => {
//     const newCategory = await categoryCollection.create((category) => {
//       category.name = name
//     })
//     return newCategory
//   })
// }

export const getAllCategoriesQuery = { queryKey: [TableName.CATEGORY], queryFn: getAllCategories }

export function useGetAllCategories() {
  return useReactNavigationQuery({
    queryKey: [TableName.CATEGORY],
    queryFn: async () => {
      const categories = await getAllCategories()
      const categoriesWithOrder = categories.map<CategoryData>((x, index) => {
        const { id, icon, name, order } = x
        return { id, icon, name, order: order || index }
      })
      return categoriesWithOrder || []
    },
    refetchOnWindowFocus: false,
  })
}
