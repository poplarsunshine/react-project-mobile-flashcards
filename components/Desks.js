import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Desks extends Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title="Add Desk"
          onPress={() =>
            navigate('AddDesk')
          }
        />
        <Button
          title="Desk Cards"
          onPress={() =>
            navigate('Cards')
          }
        />
      </View>
    )
  }
}

export default Desks
