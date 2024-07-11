import Transactions from '../../model/transaction'
import { TableName } from '../../schema/tables'
import { database } from '../db'

const transactionCollection = database.collections.get<Transactions>(TableName.TRANSACTION)

//TODO: Remove this or add filter
export const getAllTransaction = async () => {
  const transactions = await transactionCollection.query().fetch()
  return transactions
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
