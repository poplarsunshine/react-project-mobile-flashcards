import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class AddDesk extends Component {

  render() {
    const { navigate, goBack } = this.props.navigation;

    return (
      <View>
        <Text>
          DeskName
        </Text>
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
