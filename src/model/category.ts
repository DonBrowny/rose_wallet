import { Model } from '@nozbe/watermelondb'
import { text } from '@nozbe/watermelondb/decorators'
import { TableName } from '../schema/tables'
import type { IconMapKeyType } from '../schema/icons'

export default class Category extends Model {
  static table = TableName.CATEGORY
  static associations = {
    transactions: { type: 'has_many', foreignKey: 'category_id' },
  } as const

  @text('name') name!: string
  @text('icon') icon!: IconMapKeyType
}
