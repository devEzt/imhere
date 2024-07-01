import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Platform } from 'react-native'
import { styles } from './styles'
import { StackNavigationProp } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'

export type RootStackParamList = {
  EventSetup: undefined
  Home: { eventName: string; eventDate: string }
}

type EventSetupScreenProp = StackNavigationProp<RootStackParamList, 'EventSetup'>

export default function EventSetup() {
  const [eventName, setEventName] = useState('')
  const [eventDate, setEventDate] = useState(new Date()) // Mudança aqui
  const navigation = useNavigation<EventSetupScreenProp>()
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleNext = () => {
    if (eventName === '' || eventDate === null) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    navigation.navigate('Home', { eventName, eventDate: eventDate.toISOString().split('T')[0] }) // Formatação da data aqui
  }

  const onChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || eventDate
    setShowDatePicker(Platform.OS === 'ios') // Para esconder o picker no iOS após a seleção
    setEventDate(currentDate)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do Evento:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do evento"
        value={eventName}
        onChangeText={setEventName}
      />

      <Text style={styles.label}>Data do Evento:</Text>
      <TouchableOpacity style={styles.dateInput} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>{eventDate.toISOString().split('T')[0]}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={eventDate}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date(2030, 11, 31)}
          minimumDate={new Date()}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  )
}
