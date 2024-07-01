// src/app/index.tsx
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@/src/screens/Home'
import EventSetup from '@/src/screens/EventSetup'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="EventSetup">
        <Stack.Screen name="EventSetup" component={EventSetup} options={{ title: 'Configurar Evento' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Lista de Participantes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
