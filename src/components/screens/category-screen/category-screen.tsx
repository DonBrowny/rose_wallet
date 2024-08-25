import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { lightTheme } from '../../../theme/color'
import { Header } from '../../header/header'
import { BOTTOM_TAB_HEIGHT, HEADER_HEIGHT } from '../../../schema/constants'
import { useGetAllCategories } from '../../../utils/query/category-query'
import { SortCategoryMemo } from '../../sort-category/sort-category'
import AddCategory from '../../add-category/add-category'
const { height: windowHeight } = Dimensions.get('window')

const CTA_HEIGHT = 60
const TOP_PADDING = 20
const GRID_HEIGHT = windowHeight - CTA_HEIGHT - HEADER_HEIGHT - BOTTOM_TAB_HEIGHT - TOP_PADDING
// const TOP_BREAKPOINT = HEADER_HEIGHT + TOP_PADDING
// const BOTTOM_BREAKPOINT = TOP_BREAKPOINT + GRID_HEIGHT

export const CategoryScreen = () => {
  const { data: category = [], isFetching } = useGetAllCategories()
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Header text='Categories' />
        <View style={styles.innerContainer}>
          <View style={styles.scrollContainer}>
            {!isFetching ? (
              <SortCategoryMemo data={category} />
            ) : (
              <View style={styles.loadingContainer}>
                <ActivityIndicator
                  size='large'
                  color={lightTheme.PRIMARY_CTA_COLOR}
                />
              </View>
            )}
          </View>
          <View style={styles.ctaContainer}>
            <AddCategory />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
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
    overflow: 'hidden',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollContainer: {
    width: '100%',
    height: GRID_HEIGHT,
    flexDirection: 'row',
  },
  ctaContainer: {
    width: '80%',
    height: CTA_HEIGHT,
    justifyContent: 'center',
  },
})
