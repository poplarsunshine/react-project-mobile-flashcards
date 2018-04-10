export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function actionAddDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function actionAddCard (deck, card) {
  return {
    type: ADD_CARD,
    deck,
    card,
  }
}
