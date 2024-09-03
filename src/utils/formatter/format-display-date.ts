export function formatDisplayDate(date: Date) {
  const day = date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' })
  const time = date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  return `${day}-${time}`
}
