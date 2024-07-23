import { Alert, Modal, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { Text } from '../text/text'
import { styles } from './budget-container.styles'
import { ProgressBar } from '../progress-bar/progress-bar'
import { getExpenseHelperText } from '../../utils/get-expense-helper-text'
import { formatMoney } from '../../utils/formatter/format-money'
import { Cta } from '../primary-cta/cta'
import { Icon } from '../icon/icon'
import { TextInput } from '../text-input/text-input'

interface BudgetContainerProps {
  budget: number
  expense: number
}

const BudgetContainer = ({ budget, expense }: BudgetContainerProps) => {
  const progress = expense / budget
  const balance = budget - expense
  const [modalVisible, setModalVisible] = useState(false)
  const [number, onChangeNumber] = React.useState('')

  const openModal = useCallback(() => {
    setModalVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalVisible(false)
  }, [])

  return (
    <>
      <View style={styles.container}>
        <View style={styles.budgetContainer}>
          <View style={styles.amountContainerLeft}>
            <Text styleName='SMALL_NORMAL'>This Month Budget</Text>
            <Cta
              style={styles.budgetButton}
              onPress={openModal}
            >
              <View style={styles.budgetContent}>
                <Text
                  styleName='X_LARGE_BOLD'
                  color='BUDGET_TEXT_COLOR'
                >
                  {formatMoney(budget)}
                </Text>
                <Icon
                  name='edit'
                  size={24}
                />
              </View>
            </Cta>
          </View>
          <View style={styles.amountContainerRight}>
            <Text styleName='SMALL_NORMAL'>This Month Expense</Text>
            <Text
              styleName='X_LARGE_BOLD'
              color='AMT_TEXT_COLOR'
            >
              {formatMoney(expense)}
            </Text>
          </View>
        </View>
        <ProgressBar
          progress={progress}
          height={28}
        />
      </View>
      <View>
        <Text
          styleName='MEDIUM_NORMAL'
          textAlign='center'
        >
          {getExpenseHelperText(balance)}
        </Text>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text styleName={'LARGE_BOLD'}>Edit Budget</Text>
            <TextInput
              onChangeText={onChangeNumber}
              value={number}
              placeholder='Enter Monthly Budget'
              keyboardType='numeric'
            />
            <Cta onPress={closeModal}>
              <Text styleName='X_MEDIUM_MEDIUM'>Save</Text>
            </Cta>
            <Cta
              text='Close Modal'
              onPress={closeModal}
              style={styles.buttonClose}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

export default BudgetContainer
