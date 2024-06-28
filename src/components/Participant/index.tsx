import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

type UserProps = {
  username: string
  onRemove: () => void
}

export function Participant({ username, onRemove }: UserProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{username}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
