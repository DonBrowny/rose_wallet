export const getAllMonths = () => {
  let result = []

  //set both start and end date to first date of the month
  const end_date = new Date(2023, 10, 1)
  const start_date = new Date(new Date().getFullYear(), new Date().getMonth(), 1)

  while (end_date <= start_date) {
    result.push(start_date.toLocaleString('default', { month: 'long', year: 'numeric' }))
    start_date.setMonth(start_date.getMonth() - 1)
  }
  return result.reverse()
}
