import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { purple, white } from '../utils/colors'
import TitleInput from './TitleInput'

class AddDesk extends Component {

  state = {
    input: ''
  }

  handleTextInput = (value) => {
    this.setState({
        input: value
    })
  }

  render() {
    const { navigate, goBack } = this.props.navigation;

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
            alert(this.state.input)
            goBack()
          }
          }
        />
      </View>
    )
  }
}

export default AddDesk

const styles = StyleSheet.create({

})
