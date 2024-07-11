import { View } from 'react-native'
import React from 'react'
import { Cta } from '../../primary-cta/cta'
import { styles } from './category-item.styles'
import { useCallback } from 'react'

type CategoryItemProps = {
  categoryId: string
  name: string
  onItemPress: (category: string) => void
  isActive?: boolean
}

export const CategoryItem = ({ categoryId, name, isActive, onItemPress }: CategoryItemProps) => {
  const { container, button, text } = styles({ isActive })
  const itemPressHandler = useCallback(() => {
    onItemPress(categoryId)
  }, [categoryId, onItemPress])

  return (
    <View>
      <Cta
        style={container}
        ctaStyle={button}
        textStyle={text}
        text={name}
        onPress={itemPressHandler}
      />
    </View>
  )
}
