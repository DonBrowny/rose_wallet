import { Q } from '@nozbe/watermelondb'
import Transactions from '../../model/transaction'
import { TableName } from '../../schema/tables'
import { database } from '../db'

const transactionCollection = database.collections.get<Transactions>(TableName.TRANSACTION)

//TODO: Remove this or add filter
export const getAllTransaction = async () => {
  const transactions = await transactionCollection.query().fetch()
  return transactions
}

export const getTopNTransactionsWithCategory = async (records: number) => {
  const transactions = await transactionCollection
    .query(Q.experimentalJoinTables([TableName.CATEGORY]), Q.sortBy('trans_date', Q.desc), Q.take(records))
    .fetch()
  return Promise.all(
    transactions.map(async (transaction) => {
      const { category, categoryId, id, amount, transDate, description } = transaction
      const { icon, name } = await category.fetch()
      return { categoryId, id, amount, transDate, description, icon, categoryName: name }
    })
  )
}

export const addTransaction = async ({
  amount,
  categoryId,
  date,
  description,
}: {
  amount: string | number
  categoryId: string
  date: number
  description?: string
}) => {
  await database.write(async () => {
    const newCategory = await transactionCollection.create((transaction) => {
      transaction.categoryId = categoryId
      transaction.description = description || ''
      transaction.amount = Number(amount)
      transaction.transDate = new Date(date)
    })
    return newCategory
  })
}
