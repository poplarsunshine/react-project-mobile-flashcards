import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import DeckItem from './DeckItem'
import { fetchDeckWithKey } from '../utils/api'

class Cards extends Component {

  state = {
    deck: {}
  }

  componentWillMount () {
    const { state } = this.props.navigation;
    const { title }  = state.params
    fetchDeckWithKey(title, (obj) => {
      console.log('deck obj:', obj);
      this.setState({
        deck : obj
      })
    })
  }

  render() {
    const { navigate, state } = this.props.navigation;
    const { title, questions }  = this.state.deck
    const num = questions ? questions.length : 0

    return (
      <View>
        <Button
          color='#f26f28'
          title="＋ Add Card"
          onPress={() =>
            navigate('AddCard')
          }
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
