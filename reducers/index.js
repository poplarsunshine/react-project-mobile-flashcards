import {combineReducers} from 'redux'
import { SET_DECKS, ADD_DECK, ADD_CARD } from '../actions'

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

function decks (state = defaultData, action) {
  switch (action.type) {
    case SET_DECKS :
      return action.decks
    case ADD_DECK :
      console.log('reducer ADD_DECK deck:', action.deck);
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD :
      const { deckName, card } = action
      const key = deckName
      const questions = state[key]['questions']
      questions.push(card)
      const obj = {
        ...state,
        [key]: {
          ...state[key],
          'questions': questions
        }
      }
      console.log('reducer ADD_CARD state:', obj);
      return obj
    default :
      return state
  }
}

export default combineReducers(
  {
    decks,
  }
)
