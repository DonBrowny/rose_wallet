import type Transactions from '../model/transaction'
import type { IconMapKeyType } from './icons'

export interface Message {
  id: string
  address: string
  body: string
  date: string
}

export interface Transaction {
  amount: string
}
export interface TransactionWithCategory
  extends Pick<Transactions, 'amount' | 'description' | 'categoryId' | 'id' | 'transDate'> {
  icon: IconMapKeyType
}

export interface MessageWithTransaction extends Message, Transaction {}
