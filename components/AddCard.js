import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import TitleInput from './TitleInput'
import { addCardToDeck } from '../utils/api'

import { connect } from 'react-redux'
import { actionAddCard } from '../actions'

class AddCard extends Component {

  state = {
    inputQuestion: '',
    inputAnswer: '',
  }

  handleTextInputQ = (value) => {
    this.setState({
        inputQuestion: value
    })
  }

  handleTextInputA = (value) => {
    this.setState({
        inputAnswer: value
    })
  }

  handleSubmit = () => {
    if(this.state.inputQuestion && this.state.inputAnswer) {
      const { state, goBack } = this.props.navigation
      const { title, callback } = state.params
      const card = {
        question: this.state.inputQuestion,
        answer: this.state.inputAnswer
      }
      // DB
      addCardToDeck(title, card, () => {
        // Store
        this.props.actionAddCard(title, card)
        // callback()
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
          value = {this.state.inputQuestion}
          inputOnChange = {(value) => {
            this.handleTextInputQ(value)
          }}
        >
        </TitleInput>
        <TitleInput
          title={"Answer:"}
          value = {this.state.inputAnswer}
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

function mapDispatchToProps (dispatch) {
    return {
        actionAddCard: (title, data) => dispatch(actionAddCard(title, data))
    }
}

export default connect(
  null,
  mapDispatchToProps
)(AddCard)
