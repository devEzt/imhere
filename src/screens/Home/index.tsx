import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant/index'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from '../EventSetup'

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>

export default function Home() {
  const route = useRoute<HomeScreenRouteProp>()
  const { eventName, eventDate } = route.params
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert('Participant Existe', 'Já existe um participante na lista com esse nome.')
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants((prevState) => prevState.filter((participant) => participant !== name)),
      },
      { text: 'Não', style: 'cancel' },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>{eventName}</Text>
      <Text style={styles.eventDate}>{eventDate}</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor={'#6b6b'}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant key={item} username={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou ao evento ainda? Adicione participantes à sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}
