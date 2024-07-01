// src/screens/EventSetup/styles.ts
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  dateInput: {
    height: 50,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 10,
    justifyContent: 'center',
  },
  dateText: {
    color: '#000',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#0066cc',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
})
