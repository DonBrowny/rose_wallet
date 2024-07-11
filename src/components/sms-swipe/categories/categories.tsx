import { Text, View } from 'react-native'
import React from 'react'
import { CategoryItem } from '../category-item/category-item'
import { styles } from './categories.styles'
import type Category from '../../../model/category'

type CategoriesProps = { categories: Category[]; activeCategoryId: string; onItemPress: (category: string) => void }

export const Categories = ({ categories, activeCategoryId, onItemPress }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pick a category for the transaction</Text>
      <View style={styles.itemContainer}>
        {categories.map(({ name, id }) => (
          <CategoryItem
            key={`category-item-${id}`}
            name={name}
            isActive={activeCategoryId === id}
            onItemPress={onItemPress}
            categoryId={id}
          />
        ))}
      </View>
    </View>
  )
}
