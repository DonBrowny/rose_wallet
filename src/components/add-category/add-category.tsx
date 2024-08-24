import { Modal, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Cta } from '../primary-cta/cta'
import { Text } from '../text/text'
import { lightTheme } from '../../theme/color'
import { TextInput } from '../text-input/text-input'
import { CATEGORY_ICONS } from '../../schema/icons'
import { Icon } from '../icon/icon'

const AddCategory = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [number, onChangeNumber] = useState('')

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
              onChangeText={onChangeNumber}
              value={number}
              placeholder='Category Name'
            />
            <ScrollView contentContainerStyle={styles.itemContainer}>
              {CATEGORY_ICONS.map((name) => (
                <View key={`cat-select-${name}`}>
                  <Cta
                    style={styles.iconContainer}
                    onPress={() => {}}
                  >
                    <Icon
                      fill={lightTheme.NEUTRAL_BORDER}
                      name={name}
                      size={36}
                    />
                  </Cta>
                </View>
              ))}
            </ScrollView>
            <Cta>
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
    marginTop: 12,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 12,
  },
})
