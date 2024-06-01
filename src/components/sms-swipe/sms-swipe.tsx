import { View } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list'
import type { MessageWithTransaction } from '../../schema/sms'
import { SmsItem } from '../sms-item/sms-item'
import { light } from '../../theme/color'
import { styles } from './sms-swipe.styles'

type SmsSwipeProps = { data: MessageWithTransaction[] }

export const SmsSwipe = ({ data }: SmsSwipeProps) => {
  const ref = useRef<SwiperCardRefType>()
  const renderCard = useCallback((message: MessageWithTransaction) => {
    return <SmsItem transaction={message} />
  }, [])
  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: light.colors.successColor,
          },
        ]}
      />
    )
  }, [])
  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: light.colors.dangerColor,
          },
        ]}
      />
    )
  }, [])

  return (
    <View style={styles.subContainer}>
      <Swiper
        ref={ref}
        cardStyle={styles.cardStyle}
        data={data}
        renderCard={renderCard}
        onSwipeRight={(cardIndex) => {
          console.log('onSwipeRight', cardIndex)
        }}
        onSwipeLeft={(cardIndex) => {
          console.log('onSwipeLeft', cardIndex)
        }}
        OverlayLabelRight={OverlayLabelRight}
        OverlayLabelLeft={OverlayLabelLeft}
        disableTopSwipe
      />
    </View>
  )
}
