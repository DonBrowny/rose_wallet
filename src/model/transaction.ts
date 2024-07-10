import { Model, Relation } from '@nozbe/watermelondb'
import { field, relation, text } from '@nozbe/watermelondb/decorators'
import { Associations } from '@nozbe/watermelondb/Model'
import { TableName } from '../schema/tables'
import Category from './category'

export default class Transactions extends Model {
  static table = TableName.TRANSACTION
  static associations: Associations = {
    category: { type: 'belongs_to', key: 'category_id' },
  }

  @field('amount') amount!: string
  @text('description') description!: string
  @relation(TableName.CATEGORY, 'category_id') category!: Relation<Category>
}
