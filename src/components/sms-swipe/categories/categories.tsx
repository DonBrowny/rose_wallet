import { Text, View } from 'react-native'
import { CategoriesType } from '../../../schema/sms'
import { CategoryItem } from '../category-item/category-item'
import { styles } from './categories.styles'

type CategoriesProps = { categories: CategoriesType; activeCategory: string; onItemPress: (category: string) => void }

export const Categories = ({ categories, activeCategory, onItemPress }: CategoriesProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pick a category for the transaction</Text>
      <View style={styles.itemContainer}>
        {Object.keys(categories).map((category, index) => (
          <CategoryItem
            key={`category-item-${index}`}
            name={categories[category].name}
            category={category}
            isActive={activeCategory === category}
            onItemPress={onItemPress}
          />
        ))}
      </View>
    </View>
  )
}
