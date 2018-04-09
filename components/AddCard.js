import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import TitleInput from './TitleInput'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {

  state = {
    question: '',
    answer: '',
  }

  handleTextInputQ = (value) => {
    this.setState({
        question: value
    })
  }

  handleTextInputA = (value) => {
    this.setState({
        answer: value
    })
  }

  handleSubmit = () => {
    if(this.state.question && this.state.answer) {
      const { state, goBack } = this.props.navigation
      const { title, callback } = state.params
      addCardToDeck(title, this.state.question, this.state.answer, () => {
        console.log('addCardToDeck callback');
        callback()
        goBack()
      })
    }
  }

  render() {
    const { navigate, goBack, state } = this.props.navigation;
    return (
      <View>
        <Text>Add Card To {state.params.title}</Text>
        <TitleInput
          title={"Question:"}
          value = {this.state.question}
          inputOnChange = {(value) => {
            this.handleTextInputQ(value)
          }}
        >
        </TitleInput>
        <TitleInput
          title={"Answer:"}
          value = {this.state.answer}
          inputOnChange = {(value) => {
            this.handleTextInputA(value)
          }}
        >
        </TitleInput>

        <Button
          title="Submit"
          onPress={() => {
            this.handleSubmit()
          }}
          />
      </View>
    )
  }
}

export default AddCard
