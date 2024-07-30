const ALL_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const getMonthYear = (data: string) => {
  const [monthStr, year] = data.split(' ')
  const month = ALL_MONTHS.indexOf(monthStr) + 1 || 0
  return { month, year: Number(year) }
}
