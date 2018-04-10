import {combineReducers} from 'redux'
import { ADD_DECK, ADD_CARD } from '../actions'

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
    case ADD_DECK :
      return {
        ...state,
      }
    case ADD_CARD :
      return {
        ...state,
      }
    default :
      return state
  }
}

export default combineReducers(
  {
    decks,
  }
)
