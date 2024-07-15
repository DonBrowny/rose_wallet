import React from 'react'
import { View } from 'react-native'
import { styles } from './home.styles'
import { Text } from '../../text/text'
import BudgetContainer from '../../budget-container/budget-container'

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text styleName='LARGE_SEMI_BOLD'>Budget</Text>
        <BudgetContainer
          budget={25000}
          expense={15270}
        />
      </View>
      <View style={styles.innerContainer}>
        <Text
          styleName='LARGE_SEMI_BOLD'
          textAlign='center'
        >
          Category Screen
        </Text>
      </View>
    </View>
  )
}
