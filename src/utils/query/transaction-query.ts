import { Q } from '@nozbe/watermelondb'
import { useMutation } from '@tanstack/react-query'
import Transactions from '../../model/transaction'
import { TableName } from '../../schema/tables'
import { database } from '../db'
import { useReactNavigationQuery } from './react-navigation-query'

const transactionCollection = database.collections.get<Transactions>(TableName.TRANSACTION)
const EXPENSE_SUM = `${TableName.TRANSACTION}_expense_sum`

interface AddTransaction {
  amount: string | number
  categoryId: string
  date: number
  description?: string
}

export const getTotalAmount = <T extends { amount: number }>(items: T[]) => {
  return items.reduce((acc, { amount }) => acc + amount, 0)
}

const getTopNTransactionsWithCategory = async (records: number) => {
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

const getTransactionByMonth = async (month: number, year: number) => {
  const startTimestamp = new Date(year, month - 1, 1).getTime() // Get start day of a month
  const endTimestamp = new Date(year, month, 1).getTime() // Get start day of next month
  const transactions = await transactionCollection
    .query(Q.sortBy('trans_date', Q.desc), Q.where('trans_date', Q.between(startTimestamp, endTimestamp)))
    .fetch()

  return transactions
}

const getTransactionWithCategoryByMonth = async (month: number, year: number) => {
  const transactions = await getTransactionByMonth(month, year)

  return Promise.all(
    transactions.map(async (transaction) => {
      const { category, categoryId, id, amount, transDate, description } = transaction
      const { icon, name } = await category.fetch()
      return { categoryId, id, amount, transDate, description, icon, categoryName: name }
    })
  )
}

const addTransaction = async ({ amount, categoryId, date, description }: AddTransaction) => {
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

export function useGetTopNTransactionsWithCategoryQuery(records: number) {
  return useReactNavigationQuery({
    queryKey: [TableName.TRANSACTION],
    queryFn: () => getTopNTransactionsWithCategory(records),
    refetchOnWindowFocus: true,
  })
}

export function useGetCurrentMonthExpense() {
  return useReactNavigationQuery({
    queryKey: [EXPENSE_SUM],
    queryFn: async () => {
      const now = new Date()
      const transactions = await getTransactionByMonth(now.getMonth() + 1, now.getFullYear())
      return getTotalAmount(transactions)
    },
    refetchOnWindowFocus: true,
  })
}

export function useGetExpenseByMonth({ month, year }: { month: number; year: number }) {
  return useReactNavigationQuery({
    queryKey: [`monthly_expense_${month}_${year}`],
    queryFn: async () => {
      const transactions = await getTransactionWithCategoryByMonth(month, year)
      return transactions
    },
    refetchOnWindowFocus: true,
  })
}

export function useAddTransaction() {
  return useMutation({
    mutationFn: (transaction: AddTransaction) => {
      return addTransaction(transaction)
    },
  })
}
