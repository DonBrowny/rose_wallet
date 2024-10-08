import { Q } from '@nozbe/watermelondb'
import Category from '../../model/category'
import type { AddCategoryData, CategoryData, CategoryPositions } from '../../schema/category'
import { TableName } from '../../schema/tables'
import { database } from '../db'
import { useReactNavigationQuery } from './react-navigation-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const categoryCollection = database.collections.get<Category>(TableName.CATEGORY)

export const getAllCategories = async () => {
  const categories = await categoryCollection.query(Q.sortBy('order', Q.asc)).fetch()
  return categories
}

const addCategory = async ({ name, icon }: AddCategoryData) => {
  await database.write(async () => {
    const count = await categoryCollection.query().fetchCount()
    const newCategory = await categoryCollection.create((category) => {
      category.name = name
      category.icon = icon
      category.order = count // Since the order starts at 0
    })
    return newCategory
  })
}

const modifyCategoryOrder = async (newPosition: CategoryPositions) => {
  const ids = Object.keys(newPosition)
  await database.write(async () => {
    const categories = await categoryCollection.query(Q.where('id', Q.oneOf(ids)))

    await database.batch(
      categories.map((category) =>
        category.prepareUpdate(() => {
          category.order = newPosition[category.id].updatedOrder
        })
      )
    )
  })
}

export function useGetAllCategories() {
  return useReactNavigationQuery({
    queryKey: [TableName.CATEGORY],
    queryFn: async () => {
      const categories = await getAllCategories()
      const categoriesWithOrder = categories.map<CategoryData>((x) => {
        const { id, icon, name, order } = x
        return { id, icon, name, order }
      })
      return categoriesWithOrder || []
    },
    refetchOnWindowFocus: false,
  })
}

export function useModifyCategoryOrder() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (newPosition: CategoryPositions) => {
      return modifyCategoryOrder(newPosition)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TableName.CATEGORY] })
    },
  })
}

export function useAddCategoryOrder() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (cat: AddCategoryData) => {
      return await addCategory(cat)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [TableName.CATEGORY] })
    },
  })
}
