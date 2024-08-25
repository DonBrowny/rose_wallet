// The below code updates the order of the category during migration
// It converts the seed category data in to the UPDATE format
// UPDATE table SET posX=CASE
//       WHEN id=id[1] THEN posX[1]
//       WHEN id=id[2] THEN posX[2]
//       ...
//       ELSE posX END [, posY = CASE ... END]
//  WHERE id IN (id[1], id[2], id[3]...);

import { unsafeExecuteSql } from '@nozbe/watermelondb/Schema/migrations'
import { dbSeedValue } from '../schema/db-seed'
import { TableName } from '../schema/tables'

export function migrateCategoryOrder() {
  const condition = dbSeedValue[TableName.CATEGORY].reduce(
    (acc, { id, order }) => `${acc} WHEN id=${id} THEN ${order} `,
    ''
  )

  const query = ` UPDATE 
                    ${TableName.CATEGORY} 
                  SET 
                    'order'=( CASE ${condition} 
                    END) 
                  WHERE 
                    'id' in (${Object.keys(dbSeedValue[TableName.CATEGORY])})
                  `
  return unsafeExecuteSql(query)
}
