import { AsyncStorage } from 'react-native'

export const CARD_STORAGE_KEY = 'Udacity:card'

export function fetchDecksResults () {
  const results = AsyncStorage.getItem(CARD_STORAGE_KEY)
  const object = JSON.parse(results)
  return object
}
