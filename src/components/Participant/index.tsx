import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type UserProps = {
  username: string
}

export function Participant({ username }: UserProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{username}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
