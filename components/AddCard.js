import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import TitleInput from './TitleInput'

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

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View>
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
            alert(this.state.question)
            alert(this.state.answer)
            goBack()
          }
          }
        />
      </View>
    )
  }
}

export default AddCard
