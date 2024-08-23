import { TableName } from './tables'

export const dbSeedValue = {
  [TableName.CATEGORY]: [
    { id: '1', name: 'Bill', icon: 'bill', order: 0 },
    { id: '2', name: 'Education', icon: 'education', order: 1 },
    { id: '3', name: 'Entertainment', icon: 'entertainment', order: 2 },
    { id: '4', name: 'Food', icon: 'food', order: 3 },
    { id: '5', name: 'Fuel', icon: 'fuel', order: 4 },
    { id: '6', name: 'Groceries', icon: 'groceries', order: 5 },
    { id: '7', name: 'Health Care', icon: 'healthcare', order: 6 },
    { id: '8', name: 'Investment', icon: 'investment', order: 7 },
    { id: '9', name: 'Shopping', icon: 'shopping', order: 8 },
    { id: '10', name: 'Transport', icon: 'transport', order: 9 },
    { id: '11', name: 'Gift', icon: 'gift', order: 10 },
    { id: '12', name: 'Loan', icon: 'loan', order: 11 },
    { id: '13', name: 'Donation', icon: 'donate', order: 12 },
  ],
}
