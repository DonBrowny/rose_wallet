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

const Tab = createBottomTabNavigator()
const queryClient = new QueryClient()

function App(): React.JSX.Element {
  const renderTab = useCallback((props: BottomTabBarProps) => <TabBar {...props} />, [])
  return (
    <QueryClientProvider client={queryClient}>
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
            name='Home'
            component={HomeScreen}
          />
          <Tab.Screen
            name='AddExpense'
            component={AddExpenseScreen}
          />
          <Tab.Screen
            name='Transactions'
            component={History}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App
