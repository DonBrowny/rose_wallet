import { SyncDatabaseChangeSet, synchronize } from '@nozbe/watermelondb/sync'
import { database } from './db'
import { TableName } from '../schema/tables'
import { dbSeedValue } from '../schema/db-seed'
import { getAllCategories } from './queries'

export const seedDatabase = async () => {
  const categories = await getAllCategories()
  if (categories.length !== 0) {
    return undefined
  }
  return synchronize({
    database,
    async pullChanges() {
      const serverTS = new Date().getTime()
      const serverChanges: SyncDatabaseChangeSet = {
        [TableName.CATEGORY]: {
          created: dbSeedValue[TableName.CATEGORY],
          updated: [],
          deleted: [],
        },
      }

      return { changes: serverChanges, timestamp: serverTS }
    },
    async pushChanges() {
      return undefined
    },
  })
}
