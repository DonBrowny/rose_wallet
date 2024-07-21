import { Model, Query } from '@nozbe/watermelondb'
import { children, text } from '@nozbe/watermelondb/decorators'
import { TableName } from '../schema/tables'
import type { IconMapKeyType } from '../schema/icons'
import Transactions from './transaction'

export default class Category extends Model {
  static table = TableName.CATEGORY
  static associations = {
    [TableName.TRANSACTION]: { type: 'has_many', foreignKey: 'category_id' },
  } as const

  @text('name') name!: string
  @text('icon') icon!: IconMapKeyType

  @children(TableName.TRANSACTION) transactions!: Query<Transactions>
}
