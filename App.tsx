import 'react-native-gesture-handler'
import React, { useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { HomeScreen } from './src/components/screens/home/home'
import { AddExpenseScreen } from './src/components/screens/add-expense/add-expense-screen'
import { type BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabBar } from './src/components/tab-bar/tab-bar'
import { StatusBar } from 'react-native'
import { lightTheme } from './src/theme/color'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { History } from './src/components/screens/history/history'
import { Screens } from './src/schema/screens'
import { CategoryScreen } from './src/components/screens/category-screen/category-screen'
import { gestureHandlerRootHOC, GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Tab = createBottomTabNavigator()
const queryClient = new QueryClient()

function App(): React.JSX.Element {
  const renderTab = useCallback((props: BottomTabBarProps) => <TabBar {...props} />, [])
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <NavigationContainer>
            <StatusBar
              animated={true}
              backgroundColor={lightTheme.SECONDARY_BG}
            />
            <Tab.Navigator
              initialRouteName='Home'
              tabBar={renderTab}
              screenOptions={{ headerShown: false }}
            >
              <Tab.Screen
                name={Screens.HOME}
                component={HomeScreen}
              />
              <Tab.Screen
                name={Screens.ADD_TRANSACTION}
                component={AddExpenseScreen}
              />
              <Tab.Screen
                name={Screens.TRANSACTION_HISTORY}
                component={History}
              />
              <Tab.Screen
                name={Screens.CATEGORY}
                getComponent={() => gestureHandlerRootHOC(CategoryScreen)}
                // component={CategoryScreen}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default App
