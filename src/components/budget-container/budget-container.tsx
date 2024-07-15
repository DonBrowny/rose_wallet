import { View } from 'react-native'
import React from 'react'
import { Text } from '../text/text'
import { styles } from './budget-container.styles'
import { ProgressBar } from '../progress-bar/progress-bar'
import { getExpenseHelperText } from '../../utils/get-expense-helper-text'
import { formatMoney } from '../../utils/formatter/format-money'

interface BudgetContainerProps {
  budget: number
  expense: number
}

const BudgetContainer = ({ budget, expense }: BudgetContainerProps) => {
  const progress = expense / budget
  const balance = budget - expense
  return (
    <>
      <View style={styles.container}>
        <View style={styles.budgetContainer}>
          <View style={styles.amountContainerLeft}>
            <Text styleName='SMALL_NORMAL'>This Month Budget</Text>
            <Text
              styleName='X_LARGE_BOLD'
              color='BUDGET_TEXT_COLOR'
            >
              {formatMoney(budget)}
            </Text>
          </View>
          <View style={styles.amountContainerRight}>
            <Text styleName='SMALL_NORMAL'>This Month Expense</Text>
            <Text
              styleName='X_LARGE_BOLD'
              color='AMT_TEXT_COLOR'
            >
              {formatMoney(expense)}
            </Text>
          </View>
        </View>
        <ProgressBar
          progress={progress}
          height={28}
        />
      </View>
      <View>
        <Text
          styleName='MEDIUM_NORMAL'
          textAlign='center'
        >
          {getExpenseHelperText(balance)}
        </Text>
      </View>
    </>
  )
}

export default BudgetContainer
