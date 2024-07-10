import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from '../model/schema'
import migrations from '../model/migrations'
import Transactions from '../model/transaction'
import Category from '../model/category'

const dbName = 'wallet_db'

const adapter = new SQLiteAdapter({
  dbName: dbName,
  schema,
  migrations,
  jsi: false,
  onSetUpError: (error) => {
    console.log(error)
  },
})

export const database = new Database({
  adapter,
  modelClasses: [Transactions, Category],
})
