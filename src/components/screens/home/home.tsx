import { Text, View } from 'react-native'
import { lightTheme } from '../../../theme/color'

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: lightTheme.PRIMARY_BG }}>
      <Text>Home Screen</Text>
    </View>
  )
}
