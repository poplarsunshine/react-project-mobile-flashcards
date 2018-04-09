import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class AddCard extends Component {

  render() {
    const { navigate, goBack } = this.props.navigation;
    return (
      <View>
        <Text>
          Question:
        </Text>
        <Text>
          Answer:
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

export default AddCard
