export function formatDisplayDate(date: Date) {
  const day = date.toLocaleDateString('en-GB', { month: 'long', day: 'numeric' })
  const time = date.toLocaleTimeString('en-GB')
  return `${day}-${time}`
}
