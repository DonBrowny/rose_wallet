import { View, StyleSheet } from 'react-native'
import React, { useCallback, useRef } from 'react'
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list'
import type { MessageWithTransaction } from '../schema/sms'
import { SmsItem } from './sms-item'

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
            backgroundColor: 'green',
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
            backgroundColor: 'red',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStyle: {
    width: '100%',
    height: 250,
    borderRadius: 16,
    backgroundColor: '#f9c2ff',
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: 250,
    borderRadius: 16,
  },
})
