import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import DeckItem from './DeckItem'
import { fetchDeckWithKey } from '../utils/api'

class Cards extends Component {

  state = {
    deck: {}
  }

  addCard = () => {
    const callback = () => {
      this.getDeck()
    }
    const { navigate, state } = this.props.navigation;
    const { title }  = state.params
    navigate('AddCard', { title, callback })
  }

  getDeck = () => {
    const { state } = this.props.navigation;
    const { title }  = state.params
    fetchDeckWithKey(title, (obj) => {
      console.log('obj:', obj);
      this.setState({
        deck : obj
      })
    })
    console.log('getDeck:', title);
  }

  componentWillMount () {
    this.getDeck()
  }

  render() {
    const { navigate, state } = this.props.navigation;
    const { title, questions }  = this.state.deck
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
          Cards:{title}
        </Text>
        <Text>
          Num:{num}
        </Text>
        <Button
          title="Test"
          onPress={() =>
            navigate('Test', questions)
          }
        />
      </View>
    )
  }
}

export default Cards
