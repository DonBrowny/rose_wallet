// Based on the transaction-sms-parser - https://github.com/saurabhgupta050890/transaction-sms-parser

export enum IAccountType {
  CARD = 'CARD',
  WALLET = 'WALLET',
  ACCOUNT = 'ACCOUNT',
}

export const combinedWords = [
  {
    regex: /credit\scard/g,
    word: 'c_card',
    type: IAccountType.CARD,
  },
  {
    regex: /amazon\spay/g,
    word: 'amazon_pay',
    type: IAccountType.WALLET,
  },
  {
    regex: /uni\scard/g,
    word: 'uni_card',
    type: IAccountType.CARD,
  },
  {
    regex: /niyo\scard/g,
    word: 'niyo',
    type: IAccountType.ACCOUNT,
  },
  {
    regex: /slice\scard/g,
    word: 'slice_card',
    type: IAccountType.CARD,
  },
  {
    regex: /one\s*card/g,
    word: 'one_card',
    type: IAccountType.CARD,
  },
]

export const padCurrencyValue = (val: string): string => {
  const [lhs, rhs] = val.split('.')
  return `${lhs}.${(rhs ?? '').padEnd(2, '0')}`
}

export const processMessage = (message: string): string[] => {
  // convert to lower case
  let messageStr = message.toLowerCase()
  // remove '-'
  messageStr = messageStr.replace(/-/g, '')
  // remove '!'
  messageStr = messageStr.replace(/!/g, '')
  // remove ':'
  messageStr = messageStr.replace(/:/g, ' ')
  // remove '/'
  messageStr = messageStr.replace(/\//g, '')
  // remove '='
  messageStr = messageStr.replace(/=/g, ' ')
  // remove '{}'
  messageStr = messageStr.replace(/[{}]/g, ' ')
  // remove \n
  messageStr = messageStr.replace(/\n/g, ' ')
  // remove \r
  messageStr = messageStr.replace(/\r/g, ' ')
  // remove 'ending'
  messageStr = messageStr.replace(/ending /g, '')
  // replace 'x'
  messageStr = messageStr.replace(/x|[*]/g, '')
  // // remove 'is' 'with'
  // message = message.replace(/\bis\b|\bwith\b/g, '');
  // replace 'is'
  messageStr = messageStr.replace(/is /g, '')
  // replace 'with'
  messageStr = messageStr.replace(/with /g, '')
  // remove 'no.'
  messageStr = messageStr.replace(/no. /g, '')
  // replace all ac, acct, account with ac
  messageStr = messageStr.replace(/\bac\b|\bacct\b|\baccount\b/g, 'ac')
  // replace all 'rs' with 'rs. '
  messageStr = messageStr.replace(/rs(?=\w)/g, 'rs. ')
  // Replace all occurrences of 'debited by' with 'rs.'
  messageStr = messageStr.replace(/debited by/g, 'debited rs. ')
  // replace all 'rs ' with 'rs. '
  messageStr = messageStr.replace(/rs /g, 'rs. ')
  // replace all inr with rs.
  messageStr = messageStr.replace(/inr(?=\w)/g, 'rs. ')
  //
  messageStr = messageStr.replace(/inr /g, 'rs. ')
  // replace all 'rs. ' with 'rs.'
  messageStr = messageStr.replace(/rs. /g, 'rs.')
  // replace all 'rs.' with 'rs. '
  messageStr = messageStr.replace(/rs.(?=\w)/g, 'rs. ')
  // replace all 'debited' with ' debited '
  messageStr = messageStr.replace(/debited/g, ' debited ')
  // replace all 'credited' with ' credited '
  messageStr = messageStr.replace(/credited/g, ' credited ')
  // combine words
  combinedWords.forEach((word) => {
    messageStr = messageStr.replace(word.regex, word.word)
  })
  return messageStr.split(' ').filter((str) => str !== '')
}

export const getTransactionType = (message: string[]) => {
  const creditPattern = /(?:credited|credit|deposited|added|received|refund|repayment)/gi
  const debitPattern = /(?:debited|debit|deducted)/gi
  const miscPattern =
    /(?:payment|spent|paid|used\s+at|charged|transaction\son|transaction\sfee|tran|booked|purchased|withdrawn|withdrawal|sent|paying|sent\s+to|purchase\s+of|spent\s+on)/gi

  const messageStr = typeof message !== 'string' ? message.join(' ') : message

  if (debitPattern.test(messageStr)) {
    return 'debit'
  }
  if (miscPattern.test(messageStr)) {
    return 'debit'
  }
  if (creditPattern.test(messageStr)) {
    return 'credit'
  }

  return null
}

export const getTransactionAmount = (message: string[]): string => {
  const index = message.indexOf('rs.')

  // If "rs." does not exist
  // Return ""
  if (index === -1) {
    return ''
  }
  let money = message[index + 1]
  money = money.replace(/,/g, '')

  // If data is false positive
  // Look ahead one index and check for valid money
  // Else return the found money
  if (Number.isNaN(Number(money))) {
    money = message[index + 2]
    money = money?.replace(/,/g, '')

    // If this is also false positive, return ""
    // Else return the found money
    if (Number.isNaN(Number(money))) {
      return ''
    }
    return padCurrencyValue(money)
  }
  return padCurrencyValue(money)
}
