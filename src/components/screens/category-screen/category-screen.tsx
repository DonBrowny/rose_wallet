import { View, Text } from 'react-native'
import React from 'react'
import { lightTheme } from '../../../theme/color'

export const CategoryScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: lightTheme.PRIMARY_BG }}>
      <Text>CategoryScreen</Text>
    </View>
  )
}
