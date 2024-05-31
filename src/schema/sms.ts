export interface Message {
  id: string
  address: string
  body: string
  date: string
}

export interface Transaction {
  amount: string
}

export interface MessageWithTransaction extends Pick<Message, 'body' | 'date'>, Transaction {
  id: string
}
