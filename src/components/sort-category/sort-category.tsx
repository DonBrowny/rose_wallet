import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import type { CategoryData, CategoryPositions } from '../../schema/category'
import { SortCategoryItem } from './sort-category-item/sort-category-item'
import { SORT_CATEGORY_ITEM_HEIGHT } from '../../schema/constants'
import { useSharedValue } from 'react-native-reanimated'
import { getInitialPositions } from '../../utils/get-iniital-position'

interface SortCategoryProps {
  data: CategoryData[]
}

export const SortCategory = ({ data }: SortCategoryProps) => {
  const currentCategoryPositions = useSharedValue<CategoryPositions>(getInitialPositions(data))
  const draggedItemId = useSharedValue<string>('')
  const isDragging = useSharedValue<0 | 1>(0)

  return (
    <ScrollView contentContainerStyle={[styles.scrollContainer, { height: data.length * SORT_CATEGORY_ITEM_HEIGHT }]}>
      {data.map((cat) => (
        <SortCategoryItem
          key={cat.id}
          itemsLength={data.length}
          category={cat}
          isDragging={isDragging}
          draggedItemId={draggedItemId}
          currentCategoryPositions={currentCategoryPositions}
        />
      ))}
    </ScrollView>
  )
}

export const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
    paddingHorizontal: 12,
  },
})
