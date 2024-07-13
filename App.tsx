import React, { useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from './src/components/screens/home/home'
import { CategoryScreen } from './src/components/screens/category-screen/category-screen'
import { type BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from './src/components/tab-bar/tab-bar'

const Tab = createBottomTabNavigator()

function App(): React.JSX.Element {
  const renderTab = useCallback((props: BottomTabBarProps) => <TabBar {...props} />, [])
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBar={renderTab}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
        />
        <Tab.Screen
          name='Category'
          component={CategoryScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
