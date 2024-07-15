import { formatMoney } from './formatter/format-money'

export function getExpenseHelperText(balance: number) {
  if (balance <= 0) {
    return `You have overshoot the budget!`
  }
  const now = new Date()
  const todayDate = now.getDate()
  const daysThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const remainingDays = daysThisMonth - todayDate
  const perDaySpend = formatMoney(balance / remainingDays, true)
  if (remainingDays) {
    return `You can spend Rs.${perDaySpend} per day for next ${remainingDays} days`
  }
  return `You can spend Rs.${balance} today`
}
