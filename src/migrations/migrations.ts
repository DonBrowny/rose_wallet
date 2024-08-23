import { addColumns, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'
import { TableName } from '../schema/tables'
import { migrateCategoryOrder } from './update-order'

export default schemaMigrations({
  migrations: [
    {
      toVersion: 2,
      steps: [
        addColumns({ table: TableName.CATEGORY, columns: [{ name: 'order', type: 'number' }] }),
        migrateCategoryOrder(),
      ],
    },
  ],
})
