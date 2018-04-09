import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import AnswerItem from './AnswerItem'
import { lightPurp } from '../utils/colors'

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
    this.setAnswerShow(false)

    const index = this.state.testIndex + 1
    this.setState(
      {
        testIndex: index
      }
    )
  }

  setAnswerShow = (show) => {
    this.setState(
      {
        showAnswer: show
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

    return (
      (testIndex + 1 > sum) ?
      <View style={styles.item}>
        <Text style={styles.text}>Finished</Text>
        <Text style={styles.text}>RightNum: {this.state.rightNum}</Text>
        <Text style={styles.text}>WrongNum: {this.state.wrongNum}</Text>
      </View>
      :
      <View>
        <Text>Progress:{testIndex + 1}/{sum}</Text>
        <Text>QUESTION:{card.question}</Text>

        <AnswerItem
          showContent={this.state.showAnswer}
          answer={card.answer}
          itemOnPress={() => {
            this.setAnswerShow(true)
          }}
        ></AnswerItem>
        <Button
          color='#197E1C'
          title="Right"
          onPress={() => {
            this.answerRight()
          }}
        />
        <Button
          color='#B71845'
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

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    padding: 5,
    color: lightPurp,
    fontSize: 30,
  },
})
