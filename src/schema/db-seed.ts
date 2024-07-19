import { TableName } from './tables'

export const dbSeedValue = {
  [TableName.CATEGORY]: [
    { id: '1', name: 'Bill', icon: 'bill' },
    { id: '2', name: 'Education', icon: 'education' },
    { id: '3', name: 'Entertainment', icon: 'entertainment' },
    { id: '4', name: 'Food', icon: 'food' },
    { id: '5', name: 'Fuel', icon: 'fuel' },
    { id: '6', name: 'Groceries', icon: 'groceries' },
    { id: '7', name: 'Health Care', icon: 'healthcare' },
    { id: '8', name: 'Investment', icon: 'investment' },
    { id: '9', name: 'Shopping', icon: 'shopping' },
    { id: '10', name: 'Transport', icon: 'transport' },
  ],
}
