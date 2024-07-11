import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { TableName } from '../schema/tables'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: TableName.CATEGORY,
      columns: [{ name: 'name', type: 'string' }],
    }),
    tableSchema({
      name: TableName.TRANSACTION,
      columns: [
        { name: 'category_id', type: 'string', isIndexed: true },
        { name: 'amount', type: 'number' },
        { name: 'trans_date', type: 'number', isIndexed: true },
        { name: 'description', type: 'string', isOptional: true },
      ],
    }),
  ],
})
