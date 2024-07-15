export function formatMoney(money: number, hideCurrency: boolean = false) {
  if (hideCurrency) {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
    }).format(money)
  }
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(money)
}
