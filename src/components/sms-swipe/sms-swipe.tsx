import React, { useState, useMemo, RefObject, useCallback } from 'react'
import { ImageBackground, Text, View, Button, StyleSheet } from 'react-native'
import TinderCard from 'react-tinder-card'
import { MessageWithTransaction } from '../../schema/sms'
import { SmsItem } from '../sms-item/sms-item'
import { light } from '../../theme/color'
import { IconCta } from '../icon-cta/icon-cta'
import { Bar } from 'react-native-progress'
import { DoneAnimation } from './done-animation/done-animation'
import { styles } from './sms-swipe.styles'

type Direction = 'left' | 'right' | 'up' | 'down'

interface API {
  swipe(dir?: Direction): Promise<void>
  restoreCard(): Promise<void>
}

type SmsSwipeProps = { data: MessageWithTransaction[] }

const alreadyRemoved: string[] = []

export const SmsSwipe = ({ data }: SmsSwipeProps) => {
  const [messages, setMessages] = useState(data)

  const childRefs: RefObject<API>[] = useMemo(
    () =>
      Array(data.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const progress = useMemo(() => {
    return 1 - messages.length / data.length
  }, [data.length, messages.length])

  const swiped = (direction: Direction, nameToDelete: string) => {
    alreadyRemoved.push(nameToDelete)
  }

  const outOfFrame = (messageId: string) => {
    setMessages((currentState) => currentState.filter(({ id }) => id !== messageId))
  }

  const swipe = (dir: Direction) => {
    const cardsLeft = messages.filter(({ id }) => !alreadyRemoved.includes(id))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].id // Find the card object to be removed
      const index = data.map(({ id }) => id).indexOf(toBeRemoved) // Find the index of which to make the reference to
      alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
      childRefs[index].current?.swipe(dir) // Swipe the card!
    }
  }

  const renderCard = useCallback((message: MessageWithTransaction) => {
    return <SmsItem transaction={message} />
  }, [])

  if (messages.length === 0) {
    return <DoneAnimation />
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {messages.map((message, index) => (
          <TinderCard
            ref={childRefs[index]}
            key={message.id}
            preventSwipe={['up', 'down']}
            onSwipe={(dir) => swiped(dir, message.id)}
            onCardLeftScreen={() => outOfFrame(message.id)}
          >
            <View style={styles.card}>
              <SmsItem transaction={message} />
            </View>
          </TinderCard>
        ))}
      </View>
      <View style={styles.actionCtaContainer}>
        <IconCta
          name={'cross'}
          onPress={() => swipe('left')}
        />
        {/* <IconCta
          name={'reload'}
          onPress={onUndoPress}
          disabled={processedCount === 0}
        /> */}
        <IconCta
          name={'check'}
          onPress={() => swipe('right')}
        />
      </View>
      <View style={styles.progressContainer}>
        <Bar
          width={null}
          height={12}
          progress={messages?.length === 0 ? 0 : progress}
          borderRadius={12}
          borderWidth={0}
          unfilledColor={light.colors.primaryColor200}
          color={light.colors.successSecondaryColor}
          useNativeDriver
        />
      </View>
    </View>
  )
}
