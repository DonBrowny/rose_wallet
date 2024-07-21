import { Q } from '@nozbe/watermelondb'
import Transactions from '../../model/transaction'
import { TableName } from '../../schema/tables'
import { database } from '../db'

const transactionCollection = database.collections.get<Transactions>(TableName.TRANSACTION)

export const getTotalAmount = <T extends { amount: number }>(items: T[]) => {
  return items.reduce((acc, { amount }) => acc + amount, 0)
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

export const getTransactionByMonth = async (month: number, year: number) => {
  const startTimestamp = new Date(year, month - 1, 1).getTime() // Get start day of a month
  const endTimestamp = new Date(year, month, 0).getTime() // Get end day of a month
  const transactions = await transactionCollection
    .query(Q.sortBy('trans_date', Q.desc), Q.where('trans_date', Q.between(startTimestamp, endTimestamp)))
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
