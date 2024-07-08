import { View } from 'react-native'
import { Cta } from '../../primary-cta/cta'
import { styles } from './category-item.styles'
import { useCallback } from 'react'

type CategoryItemProps = {
  category: string
  name: string
  onItemPress: (category: string) => void
  isActive?: boolean
}

export const CategoryItem = ({ category, name, isActive, onItemPress }: CategoryItemProps) => {
  const { container, button, text } = styles({ isActive })
  const itemPressHandler = useCallback(() => {
    onItemPress(category)
  }, [])
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
