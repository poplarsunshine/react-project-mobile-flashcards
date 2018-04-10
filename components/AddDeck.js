import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { purple, white } from '../utils/colors'
import TitleInput from './TitleInput'
import { saveDeck } from '../utils/api'

import { connect } from 'react-redux'
import { actionAddDeck } from '../actions'

class AddDeck extends Component {

  state = {
    input: ''
  }

  handleTextInput = (value) => {
    this.setState({
        input: value
    })
  }

  handleSubmit = () => {
    if(this.state.input) {
      const { state, goBack } = this.props.navigation
      const callback = state.params.callback
      const title = this.state.input
      const obj = {
        [title] : {
          title: title,
          questions: [],
        }
      }
      // Store
      this.props.actionAddDeck(obj)
      // DB
      saveDeck(obj)
      // callback()
      goBack()
    }
  }

  render() {
    return (
      <View>
        <TitleInput
          title={"Name"}
          value = {this.state.input}
          inputOnChange = {(value) => {
            this.handleTextInput(value)
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
        actionAddDeck: (data) => dispatch(actionAddDeck(data))
    }
}

export default connect(
  null,
  mapDispatchToProps
)(AddDeck)

const styles = StyleSheet.create({

})
