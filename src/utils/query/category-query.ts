import Category from '../../model/category'
import { TableName } from '../../schema/tables'
import { database } from '../db'

const categoryCollection = database.collections.get<Category>(TableName.CATEGORY)

export const getAllCategories = async () => {
  const categories = await categoryCollection.query().fetch()
  return categories
}

export const addCategory = async (name: string) => {
  await database.write(async () => {
    const newCategory = await categoryCollection.create((category) => {
      category.name = name
    })
    return newCategory
  })
}
