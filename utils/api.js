import { AsyncStorage } from 'react-native'

export const CARD_STORAGE_KEY = 'Udacity:cards'

export function fetchDecksResults (callback) {
  const promise = AsyncStorage.getItem(CARD_STORAGE_KEY, (error, results) => {
    console.log('results:', results);
    const obj = (results === null)
      ? {}
      : JSON.parse(results)
    callback(obj)
  })
}

export function fetchDeckWithKey (key, callback) {
  const promise = AsyncStorage.getItem(CARD_STORAGE_KEY, (error, results) => {
    const obj = (results === null)
      ? {}
      : JSON.parse(results)

    const deck = obj[key]
    callback(deck)
  })
}

export function saveDeckTitle (title) {
  const obj = {
    [title] : {
      title: title,
      questions: [],
    }
  }
  return AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify(obj))
}

export function addCardToDeck (key, question, answer, callback) {
  const qa = { question, answer}
  fetchDecksResults((obj) => {
    const deck = obj[key]
    deck.questions.push(qa)
    obj[key] = deck
    AsyncStorage.mergeItem(CARD_STORAGE_KEY, JSON.stringify(obj), callback())
  })
}
