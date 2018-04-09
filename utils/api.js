import { AsyncStorage } from 'react-native'

export const CARD_STORAGE_KEY = 'Udacity:cards'

defaultData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

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

    console.log('fetchDeckWithKey obj:', obj);
    const deck = obj[key]
    console.log('fetchDeckWithKey key:', key);
    console.log('fetchDeckWithKey deck:', deck);
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
