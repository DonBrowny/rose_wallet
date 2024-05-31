export function convertTimestampToDisplayTime(timestamp: string) {
  const event = new Date(Number(timestamp))

  return event.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}
