import { View } from 'react-native'
import React from 'react'
import { CategoryData, CategoryPositions } from '../../../schema/category'
import { Text } from '../../text/text'
import { styles } from './sort-category-item.styles'
import { Icon } from '../../icon/icon'
import Animated, { SharedValue } from 'react-native-reanimated'
import { GestureDetector } from 'react-native-gesture-handler'
import { useGesture } from './useGesture'

interface SortCategoryItemProps {
  itemsLength: number
  category: CategoryData
  isDragging: SharedValue<number>
  draggedItemId: SharedValue<string>
  currentCategoryPositions: SharedValue<CategoryPositions>
}

export const SortCategoryItem = ({
  category,
  draggedItemId,
  currentCategoryPositions,
  isDragging,
  itemsLength,
}: SortCategoryItemProps) => {
  const { icon, name } = category

  const { animatedStyles, gesture } = useGesture(
    itemsLength,
    category,
    isDragging,
    draggedItemId,
    currentCategoryPositions
  )

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <Icon
        size={28}
        name={icon}
        fill='#000'
      />
      <View style={styles.text}>
        <Text styleName='X_MEDIUM_MEDIUM'>{name}</Text>
      </View>
      <GestureDetector gesture={gesture}>
        <View style={styles.draggerContainer}>
          <View style={[styles.dragger, styles.marginBottom]} />
          <View style={[styles.dragger, styles.marginBottom]} />
          <View style={styles.dragger} />
        </View>
      </GestureDetector>
    </Animated.View>
  )
}
