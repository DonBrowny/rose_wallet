import React, { useCallback } from 'react'
import { styles } from './month-pill.styles'
import { Text } from '../text/text'
import { Cta } from '../primary-cta/cta'

interface MonthPillProps {
  name: string
  isActive: boolean
  onPress: (name: string) => void
}

export const MonthPill = ({ name, isActive, onPress }: MonthPillProps) => {
  const { container } = styles({ isActive })
  const [month, year] = name.split(' ')
  const currentYear = new Date().getFullYear()
  const isCurrentYear = Number(year) === currentYear

  const pressHandler = useCallback(() => {
    onPress(name)
  }, [name, onPress])

  return (
    <Cta
      onPress={pressHandler}
      style={container}
    >
      <Text styleName='SMALL_NORMAL'>{month}</Text>
      {!isCurrentYear ? <Text styleName='SMALL_NORMAL'>{year}</Text> : null}
    </Cta>
  )
}
