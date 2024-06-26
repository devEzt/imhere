import { Text, View, TextInput } from 'react-native'
import { styles } from './styles'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <TextInput style={styles.input} placeholder="Nome do Participante" placeholderTextColor={'#6b6b'} />
    </View>
  )
}
