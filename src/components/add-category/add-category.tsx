import { Modal, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Cta } from '../primary-cta/cta'
import { Text } from '../text/text'
import { lightTheme } from '../../theme/color'
import { TextInput } from '../text-input/text-input'
import { CATEGORY_ICONS, IconMapKeyType } from '../../schema/icons'
import { AddCategoryItem } from './add-category-item/add-category-item'
import { useAddCategoryOrder } from '../../utils/query/category-query'

const AddCategory = () => {
  const { mutate } = useAddCategoryOrder()
  const [modalVisible, setModalVisible] = useState(false)
  const [categoryName, setCategoryName] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<IconMapKeyType | null>(null)
  const iconSelectHandler = useCallback((name: IconMapKeyType) => {
    setSelectedCategory(name)
  }, [])
  const addCategoryHandler = useCallback(() => {
    if (selectedCategory) {
      mutate({ name: categoryName, icon: selectedCategory })
      setModalVisible(false)
    }
  }, [categoryName, mutate, selectedCategory])

  const openModal = useCallback(() => {
    setModalVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalVisible(false)
  }, [])

  return (
    <>
      <Cta
        text='Add Category'
        onPress={openModal}
      />
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text styleName={'LARGE_BOLD'}>Add Category</Text>
            <TextInput
              onChangeText={setCategoryName}
              value={categoryName}
              placeholder='Category Name'
            />
            <Text styleName='MEDIUM_SEMI_BOLD'>Pick a icon for Category</Text>
            <ScrollView contentContainerStyle={styles.itemContainer}>
              {CATEGORY_ICONS.map((name) => (
                <AddCategoryItem
                  key={`add-item-${name}`}
                  name={name}
                  isSelected={selectedCategory === name}
                  onPress={iconSelectHandler}
                />
              ))}
            </ScrollView>
            <Cta
              onPress={addCategoryHandler}
              disabled={!categoryName || !selectedCategory}
            >
              <Text styleName='X_MEDIUM_MEDIUM'>Add</Text>
            </Cta>
            <Cta
              text='Close'
              onPress={closeModal}
              style={styles.buttonClose}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

export default AddCategory

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
  },
  modalView: {
    height: '80%',
    backgroundColor: 'white',
    padding: 32,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    rowGap: 8,
  },
  inputView: {
    height: 42,
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 32,
    gap: 24,
  },
  buttonClose: {
    backgroundColor: lightTheme.SECONDARY_CTA_COLOR,
    marginTop: 8,
  },
})
