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
