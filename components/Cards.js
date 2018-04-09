import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import DeckItem from './DeckItem'

class Cards extends Component {

  state = {
    // cards: [
    //   {question: 'Devin?', answer: 0},
    //   {question: 'Jackson?', answer: 34},
    //   {question: 'James?', answer: 3},
    //   {question: 'Joel?', answer: 3},
    //   {question: 'John?', answer: 45},
    //   {question: 'Jillian?', answer: 0},
    //   {question: 'Jimmy?', answer: 0},
    //   {question: 'Julie?', answer: 25},
    // ]
  }

  render() {
    const { navigate, state } = this.props.navigation;
    const { title, questions }  = state.params
    const num = questions.length

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
