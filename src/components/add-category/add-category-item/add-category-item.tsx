import { StyleSheet, View } from 'react-native'
import React, { useCallback } from 'react'
import { Icon } from '../../icon/icon'
import { lightTheme } from '../../../theme/color'
import { Cta } from '../../primary-cta/cta'
import type { IconMapKeyType } from '../../../schema/icons'

interface AddCategoryItemProps {
  name: IconMapKeyType
  onPress: (name: IconMapKeyType) => void
  isSelected?: boolean
}

export const AddCategoryItem = ({ name, onPress, isSelected = false }: AddCategoryItemProps) => {
  const onPressHandler = useCallback(() => onPress(name), [name, onPress])
  const { iconContainer } = styles(isSelected)
  return (
    <View>
      <Cta
        style={iconContainer}
        onPress={onPressHandler}
      >
        <Icon
          fill={isSelected ? lightTheme.NEUTRAL_BORDER : lightTheme.PRIMARY_CTA_COLOR}
          name={name}
          size={36}
        />
      </Cta>
    </View>
  )
}

const styles = (isSelected: boolean) =>
  StyleSheet.create({
    iconContainer: {
      width: 52,
      height: 52,
      borderRadius: 12,
      backgroundColor: isSelected ? lightTheme.PRIMARY_CTA_COLOR : lightTheme.SECONDARY_CTA_COLOR,
    },
  })
