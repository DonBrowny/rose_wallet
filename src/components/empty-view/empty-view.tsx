import { View } from 'react-native'
import React from 'react'
import { Text } from '../text/text'
import { Icon } from '../icon/icon'
import { styles } from './empty-view.styles'
import { Cta } from '../primary-cta/cta'

interface EmptyViewProps {
  text: string
  btnText?: string
  onPress?: () => void
}

export const EmptyView = ({ text, btnText, onPress }: EmptyViewProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name='emptyWallet'
        size={100}
        fill='#000'
      />
      <Text styleName='X_MEDIUM_MEDIUM'>{text}</Text>
      {btnText ? (
        <Cta
          style={styles.cta}
          text={btnText}
          onPress={onPress}
        />
      ) : null}
    </View>
  )
}
