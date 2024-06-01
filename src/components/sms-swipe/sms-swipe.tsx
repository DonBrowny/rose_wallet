import { View } from 'react-native'
import React, { useCallback, useRef, useState } from 'react'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list'
import { Bar } from 'react-native-progress'
import type { MessageWithTransaction } from '../../schema/sms'
import { SmsItem } from '../sms-item/sms-item'
import { light } from '../../theme/color'
import { styles } from './sms-swipe.styles'

type SmsSwipeProps = { data: MessageWithTransaction[] }

export const SmsSwipe = ({ data }: SmsSwipeProps) => {
  const [processedCount, setProcessedCount] = useState(0)
  const ref = useRef<SwiperCardRefType>()
  const renderCard = useCallback((message: MessageWithTransaction) => {
    return <SmsItem transaction={message} />
  }, [])

  const swipeRightHandler = useCallback((cardIndex: number) => {
    console.log(cardIndex)
    setProcessedCount((currentState) => currentState + 1)
  }, [])

  const swipeLeftHandler = useCallback((cardIndex: number) => {
    console.log(cardIndex)
    setProcessedCount((currentState) => currentState + 1)
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
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          cardStyle={styles.cardStyle}
          data={data}
          renderCard={renderCard}
          onSwipeRight={swipeRightHandler}
          onSwipeLeft={swipeLeftHandler}
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          disableTopSwipe
        />
      </View>

      <Bar
        style={styles.progressView}
        width={null}
        height={12}
        progress={data?.length === 0 ? 0 : processedCount / data.length}
        borderRadius={12}
        borderWidth={0}
        unfilledColor={light.colors.primaryColor200}
        color={light.colors.successSecondaryColor}
        useNativeDriver
      />
    </View>
  )
}
