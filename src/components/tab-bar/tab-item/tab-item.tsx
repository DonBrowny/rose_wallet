import React from 'react'
import { View } from 'react-native'
import { Icon } from '../../icon/icon'
import { Cta } from '../../primary-cta/cta'
import { styles } from './tab-item.styles'
import { TAB_ICON_MAP } from '../../../schema/screens'

interface TabItemProps {
  label: string
  isFocused: boolean
  onPress: () => void
}

export const TabItem = ({ label, isFocused, onPress }: TabItemProps) => {
  const { container, tabCta } = styles(isFocused)
  return (
    <View style={container}>
      <Cta
        onPress={onPress}
        style={tabCta}
      >
        <Icon
          name={TAB_ICON_MAP[label]}
          size={30}
        />
      </Cta>
    </View>
  )
}
