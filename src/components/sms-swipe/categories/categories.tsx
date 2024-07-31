import { ScrollView, View } from 'react-native'
import React from 'react'
import { CategoryItem } from '../category-item/category-item'
import { styles } from './categories.styles'
import type Category from '../../../model/category'
import { Text } from '../../text/text'

type CategoriesProps = { categories: Category[]; activeCategoryId: string; onItemPress: (category: string) => void }

export const Categories = ({ categories, activeCategoryId, onItemPress }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text styleName='X_MEDIUM_SEMI_BOLD'>Pick a category for the transaction</Text>
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
