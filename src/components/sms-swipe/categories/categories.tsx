import { ScrollView, View } from 'react-native'
import React from 'react'
import { CategoryItem } from '../category-item/category-item'
import { styles } from './categories.styles'
import { Text } from '../../text/text'
import type { CategoryData } from '../../../schema/category'

type CategoriesProps = { categories: CategoryData[]; activeCategoryId: string; onItemPress: (category: string) => void }

export const Categories = ({ categories, activeCategoryId, onItemPress }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text
        styleName='X_MEDIUM_SEMI_BOLD'
        textAlign='center'
      >
        Pick a category for the transaction
      </Text>
      <ScrollView contentContainerStyle={styles.itemContainer}>
        {categories.map(({ name, id }) => (
          <CategoryItem
            key={`category-item-${id}`}
            name={name}
            isActive={activeCategoryId === id}
            onItemPress={onItemPress}
            categoryId={id}
          />
        ))}
      </ScrollView>
    </View>
  )
}
