import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { purple, white } from '../utils/colors'
import TitleInput from './TitleInput'
import { saveDeckTitle } from '../utils/api'

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
      saveDeckTitle(this.state.input)
      callback()
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

export default AddDeck

const styles = StyleSheet.create({

})
