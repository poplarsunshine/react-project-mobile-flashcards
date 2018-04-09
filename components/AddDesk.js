import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { purple, white } from '../utils/colors'

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
        <Text>
          DeskName
        </Text>
        <TextInput
          style={styles.input}
          value = {this.state.input}
          onChangeText = {(value) => {
            this.handleTextInput(value)
          }}
        >
        </TextInput>
        <Button
          title="Submit"
          onPress={() =>
            goBack()
          }
        />
      </View>
    )
  }
}

export default AddDesk

const styles = StyleSheet.create({
  input: {
    backgroundColor: white,
  },
})
