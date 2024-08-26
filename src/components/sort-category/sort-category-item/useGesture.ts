import {
  SharedValue,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { Gesture } from 'react-native-gesture-handler'
import type { CategoryData, CategoryPositions, NullableNumber } from '../../../schema/category'
import { SORT_CATEGORY_ITEM_HEIGHT } from '../../../schema/constants'
import { useModifyCategoryOrder } from '../../../utils/query/category-query'

const MIN_BOUNDRY = 0

export const useGesture = (
  categoryCount: number,
  item: CategoryData,
  isDragging: SharedValue<number>,
  draggedItemId: SharedValue<string>,
  currentCategoryPositions: SharedValue<CategoryPositions>
) => {
  const { mutate } = useModifyCategoryOrder()
  const saveChanges = (newPositions: CategoryPositions) => {
    mutate(newPositions)
  }
  const MAX_BOUNDRY = (categoryCount - 1) * SORT_CATEGORY_ITEM_HEIGHT
  const { id, order } = item
  //used for swapping with currentIndex
  const newIndex = useSharedValue<NullableNumber>(null)

  //used for swapping with newIndex
  const currentIndex = useSharedValue<NullableNumber>(null)

  const positionsDerived = useDerivedValue(() => {
    return currentCategoryPositions.value
  })

  const top = useSharedValue(order * SORT_CATEGORY_ITEM_HEIGHT)

  const isDraggingDerived = useDerivedValue(() => {
    return isDragging.value
  })

  const draggedItemIdDerived = useDerivedValue(() => {
    return draggedItemId.value
  })

  useAnimatedReaction(
    () => {
      return positionsDerived.value[id].updatedOrder
    },
    (currentValue, previousValue) => {
      if (currentValue !== previousValue) {
        if (draggedItemIdDerived.value !== null && draggedItemIdDerived.value === id) {
          top.value = withSpring(positionsDerived.value[id].updatedOrder * SORT_CATEGORY_ITEM_HEIGHT)
        } else {
          top.value = withTiming(positionsDerived.value[id].updatedOrder * SORT_CATEGORY_ITEM_HEIGHT, {
            duration: 500,
          })
        }
      }
    }
  )

  const isCurrentDraggingItem = useDerivedValue(() => {
    return isDraggingDerived.value && draggedItemIdDerived.value === id
  })

  const getKeyOfValue = (value: number, obj: CategoryPositions): string | undefined => {
    'worklet'
    for (const [key, val] of Object.entries(obj)) {
      if (val.updatedOrder === value) {
        return key
      }
    }
    return undefined // Return undefined if the value is not found
  }

  const gesture = Gesture.Pan()
    .onStart(() => {
      //start dragging
      isDragging.value = withSpring(1)

      //keep track of dragged item
      draggedItemId.value = id

      //store dragged item id for future swap
      currentIndex.value = positionsDerived.value[id].updatedOrder
    })
    .onUpdate((e) => {
      if (draggedItemIdDerived.value === null) {
        return
      }

      const newTop = positionsDerived.value[draggedItemIdDerived.value].updatedTop + e.translationY

      if (currentIndex.value === null || newTop < MIN_BOUNDRY || newTop > MAX_BOUNDRY) {
        //dragging out of bound
        return
      }
      top.value = newTop

      //calculate the new index where drag is headed to
      newIndex.value = Math.floor((newTop + SORT_CATEGORY_ITEM_HEIGHT / 2) / SORT_CATEGORY_ITEM_HEIGHT)

      //swap the items present at newIndex and currentIndex
      if (newIndex.value !== currentIndex.value) {
        //find id of the item that currently resides at newIndex
        const newIndexItemKey = getKeyOfValue(newIndex.value, positionsDerived.value)

        //find id of the item that currently resides at currentIndex
        const currentDragIndexItemKey = getKeyOfValue(currentIndex.value, positionsDerived.value)

        if (newIndexItemKey !== undefined && currentDragIndexItemKey !== undefined) {
          //we update updatedTop and updatedOrder as next time we want to do calculations from new top value and new index
          currentCategoryPositions.value = {
            ...positionsDerived.value,
            [newIndexItemKey]: {
              ...positionsDerived.value[newIndexItemKey],
              updatedOrder: currentIndex.value,
              updatedTop: currentIndex.value * SORT_CATEGORY_ITEM_HEIGHT,
            },
            [currentDragIndexItemKey]: {
              ...positionsDerived.value[currentDragIndexItemKey],
              updatedOrder: newIndex.value,
            },
          }

          //update new index as current index
          currentIndex.value = newIndex.value
        }
      }
    })
    .onEnd(() => {
      if (currentIndex.value === null || newIndex.value === null) {
        return
      }
      top.value = withSpring(newIndex.value * SORT_CATEGORY_ITEM_HEIGHT)
      //find original id of the item that currently resides at currentIndex
      const currentDragIndexItemKey = getKeyOfValue(currentIndex.value, positionsDerived.value)

      if (currentDragIndexItemKey !== undefined) {
        //update the values for item whose drag we just stopped
        currentCategoryPositions.value = {
          ...positionsDerived.value,
          [currentDragIndexItemKey]: {
            ...positionsDerived.value[currentDragIndexItemKey],
            updatedTop: newIndex.value * SORT_CATEGORY_ITEM_HEIGHT,
          },
        }
      }
      //stop dragging
      isDragging.value = withDelay(200, withSpring(0))
      runOnJS(saveChanges)(currentCategoryPositions.value)
    })

  const animatedStyles = useAnimatedStyle(() => {
    return {
      top: top.value,
      transform: [
        {
          scale: isCurrentDraggingItem.value
            ? interpolate(isDraggingDerived.value, [0, 1], [1, 1.025])
            : interpolate(isDraggingDerived.value, [0, 1], [1, 0.98]),
        },
      ],
      shadowOpacity: isCurrentDraggingItem.value ? interpolate(isDraggingDerived.value, [0, 1], [0, 0.2]) : 0,
      shadowRadius: isCurrentDraggingItem.value ? interpolate(isDraggingDerived.value, [0, 1], [0, 10]) : 0,
      elevation: isCurrentDraggingItem.value ? interpolate(isDraggingDerived.value, [0, 1], [0, 5]) : 0, // For Android,
      zIndex: isCurrentDraggingItem.value ? 1 : 0,
    }
  }, [draggedItemIdDerived.value, isDraggingDerived.value])

  return {
    animatedStyles,
    gesture,
  }
}
