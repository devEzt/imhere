import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'

import { Participant } from '../../components/Participant/index'

export default function Home() {
  const participants = [
    'Rodrigo',
    'Diego',
    'Roberto',
    'Bob',
    'Roberta',
    'Lupita',
    'Ana',
    'Jaqueline',
    'Henrique',
    'FAbio',
    'Joao',
  ]

  const handleParticipantAdd = () => {
    if (participants.includes('Rodrigo')) {
      return Alert.alert('Participant Existe', 'Já existe um participante na lista com esse nome.')
    }

    console.log('voce clicou no botao de adicionar!')
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Remove ro participante ${name} ?`, [
      { text: 'Sim', onPress: () => Alert.alert('Deletado!') },
      { text: 'Não', style: 'cancel' },
    ])
    console.log(`voce removeu um partiicpante : ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome do Participante" placeholderTextColor={'#6b6b'} />

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
            Ninguém Chegou ao evento ainda ? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
    </View>
  )
}
