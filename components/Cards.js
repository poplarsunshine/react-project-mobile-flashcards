import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import DeckItem from './DeckItem'
import { fetchDecksResults } from '../utils/api'

import { connect } from 'react-redux'
import { actionSetDecks } from '../actions'

class Cards extends Component {

  addCard = () => {
    const callback = () => {
      // this.getDeck()
    }
    const { navigate, state } = this.props.navigation;
    const { title }  = state.params
    navigate('AddCard', { title, callback })
  }

  getDeck = () => {
    fetchDecksResults((obj) => {
      this.props.actionSetDecks(obj);
    })
  }

  componentWillMount () {
    this.getDeck()
  }

  render() {
    const { navigate, state } = this.props.navigation;
    const { title }  = state.params
    const { decks } = this.props
    const deck = decks[title]
    const { questions }  = deck
    const num = questions ? questions.length : 0

    console.log('questions:', questions);

    return (
      <View>
        <Button
          color='#f26f28'
          title="＋ Add Card"
          onPress={this.addCard}
        />
        <Text>
          Deck:{title}
        </Text>
        <Text>
          Num:{num}
        </Text>
        <Button
          title="Start Test"
          onPress={() =>
            navigate('Test', questions)
          }
        />
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return decks
}

function mapDispatchToProps (dispatch) {
    return {
        actionSetDecks: (data) => dispatch(actionSetDecks(data)),
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards)
