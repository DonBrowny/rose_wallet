import React, { useState, useMemo, RefObject, useCallback } from 'react'
import { View } from 'react-native'
import { MessageWithTransaction } from '../../schema/sms'
import { IconCta } from '../icon-cta/icon-cta'
import { DoneAnimation } from './done-animation/done-animation'
import { styles } from './sms-swipe.styles'
import { Categories } from './categories/categories'
import type Category from '../../model/category'
import { useAddTransaction } from '../../utils/query/transaction-query'
import { getMMKVLoader } from '../../utils/mmkv-service/mmkv-service'
import { useMMKVStorage } from 'react-native-mmkv-storage'
import { MMKV_LAST_PROCESSED_SMS } from '../../schema/mmkv-keys'
import { SmsAnimatedCard, SmsAnimatedCardRef, SmsAnimationDirection } from './sms-animated-card/sms-animated-card'

type SmsSwipeProps = { data: MessageWithTransaction[]; category: Category[] }

const storage = getMMKVLoader()

export const SmsSwipe = ({ data, category: categoryData }: SmsSwipeProps) => {
  const [messages, setMessages] = useState(data)
  const activeIndex = 0
  const totalLength = data.length
  const [activeCategoryId, setActiveCategoryId] = useState<string>('')
  const [_, setProcessedTime] = useMMKVStorage<string>(MMKV_LAST_PROCESSED_SMS, storage)

  const { mutate } = useAddTransaction()
  const onItemPress = useCallback((category: string) => {
    setActiveCategoryId(category)
  }, [])

  const childRefs: RefObject<SmsAnimatedCardRef>[] = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map(() => React.createRef()),
    [data.length]
  )

  const outOfFrame = (messageId: string) => {
    setMessages((currentState) => currentState.filter(({ id }) => id !== messageId))
  }

  const swipe = useCallback(
    (dir: SmsAnimationDirection) => {
      const activeCard = messages[0]
      if (activeCard) {
        childRefs[activeIndex].current?.swipe(dir) // Swipe the card!
        if (dir === 'right') {
          mutate({ amount: activeCard.amount, categoryId: activeCategoryId, date: Number(activeCard.date) })
        }
        setActiveCategoryId('')
        setProcessedTime(activeCard.date)
      }
    },
    [activeCategoryId, childRefs, messages, mutate, setProcessedTime]
  )

  const swipeLeftHandler = useCallback(() => {
    swipe('left')
  }, [swipe])

  const swipeRightHandler = useCallback(() => {
    swipe('right')
  }, [swipe])

  if (messages.length === 0) {
    return <DoneAnimation />
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {messages.map((message, index) => (
          <SmsAnimatedCard
            ref={childRefs[index]}
            key={message.id}
            onCardLeftScreen={() => outOfFrame(message.id)}
            activeIndex={activeIndex}
            currentIndex={index}
            totalLength={totalLength}
            transaction={message}
          />
        ))}
      </View>
      <Categories
        categories={categoryData}
        activeCategoryId={activeCategoryId}
        onItemPress={onItemPress}
      />
      <View style={styles.actionCtaContainer}>
        <IconCta
          name={'cross'}
          onPress={swipeLeftHandler}
        />
        {/* <IconCta
          name={'reload'}
          onPress={onUndoPress}
          disabled={processedCount === 0}
        /> */}
        <IconCta
          name={'check'}
          onPress={swipeRightHandler}
          disabled={!activeCategoryId}
        />
      </View>
    </View>
  )
}
