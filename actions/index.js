export const SET_DECKS = 'SET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function actionSetDecks (decks) {
  return {
    type : SET_DECKS,
    decks
  }
}

export function actionAddDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function actionAddCard (deckName, card) {
  return {
    type: ADD_CARD,
    deckName,
    card,
  }
}
