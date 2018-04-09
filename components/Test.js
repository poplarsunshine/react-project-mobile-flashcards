import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Test extends Component {
  state = {
    testIndex: 0,
    rightNum: 0,
    wrongNum: 0,
    showAnswer: false,
  }

  answerRight = () => {
    const rightNum = this.state.rightNum + 1
    this.setState(
      {
        rightNum: rightNum
      }
    )
    this.setIndex()
  }

  answerWrong = () => {
    const wrongNum = this.state.wrongNum + 1
    this.setState(
      {
        wrongNum: wrongNum
      }
    )
    this.setIndex()
  }

  setIndex = () => {
    const index = this.state.testIndex + 1
    this.setState(
      {
        testIndex: index
      }
    )
  }

  render() {
    const { testIndex } = this.state;
    const { navigate, state } = this.props.navigation;
    const cards  = state.params
    const sum = cards.length

    console.log('testIndex:', testIndex);
    const card = cards[testIndex]
    console.log('Test card:', card);

    return (
      (testIndex + 1 > sum) ?
      <View>
        <Text>Done</Text>
        <Text>RightNum:{this.state.rightNum}</Text>
        <Text>WrongNum{this.state.wrongNum}</Text>
      </View>
      :
      <View>
        <Text>Progress:{testIndex + 1}/{sum}</Text>
        <Text>QUESTION:{card.question}</Text>

        (this.state.showAnswer) ?
        <View>
          <Text>ANSWER:{card.answer}</Text>
        </View>
        :
        <View>
        <Button
          title="Answer"
          onPress={() => {

          }}
        />
        </View>

        <Button
          title="Right"
          onPress={() => {
            this.answerRight()
          }}
        />
        <Button
          title="Wrong"
          onPress={() => {
            this.answerWrong()
          }}
        />
      </View>
    )
  }
}

export default Test
