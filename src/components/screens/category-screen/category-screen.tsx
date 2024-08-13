import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { IconPill } from '../../icon-pill/icon-pill'
import { lightTheme } from '../../../theme/color'
import { Cta } from '../../primary-cta/cta'
import { Header } from '../../header/header'
// import { BOTTOM_TAB_HEIGHT, HEADER_HEIGHT } from '../../../schema/constants'
import { useGetAllCategories } from '../../../utils/query/category-query'
import type Category from '../../../model/category'
import { Text } from '../../text/text'
// const { height: windowHeight } = Dimensions.get('window')

const CTA_HEIGHT = 60
const TOP_PADDING = 20
// const GRID_HEIGHT = windowHeight - CTA_HEIGHT - HEADER_HEIGHT - BOTTOM_TAB_HEIGHT - TOP_PADDING
// const TOP_BREAKPOINT = HEADER_HEIGHT + TOP_PADDING
// const BOTTOM_BREAKPOINT = TOP_BREAKPOINT + GRID_HEIGHT

export const CategoryScreen = () => {
  const { data: category = [] } = useGetAllCategories()

  console.log('category', category)

  function renderItem({ name, icon }: Category) {
    console.log({ name, icon })
    return (
      <View key={icon}>
        <IconPill
          variant='large'
          name={icon}
        />
        <Text
          styleName='MEDIUM_NORMAL'
          textAlign='center'
        >
          {name}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header text='Categories' />
      <View style={styles.innerContainer}>
        <ScrollView>{category.map((x) => renderItem(x))}</ScrollView>
        <View style={styles.ctaContainer}>
          <Cta text='Add Category' />
        </View>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.SECONDARY_BG,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: lightTheme.PRIMARY_BG,
    paddingTop: TOP_PADDING,
    borderTopLeftRadius: 55,
    borderTopRightRadius: 55,
    alignItems: 'center',
  },
  scrollContainer: {
    width: '100%',
    // height: GRID_HEIGHT,
    flexDirection: 'row',
  },
  ctaContainer: {
    width: '80%',
    height: CTA_HEIGHT,
    justifyContent: 'center',
  },
})
