import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Cards extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>
          Cards
        </Text>
        <Button
          title="Add Card"
          onPress={() =>
            navigate('AddCard')
          }
        />
        <Button
          title="Test"
          onPress={() =>
            navigate('Test')
          }
        />
      </View>
    )
  }
}

export default Cards
