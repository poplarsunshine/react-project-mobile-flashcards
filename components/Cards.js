import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Cards extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    const { name, num }  = state.params //取得正向传值

    return (
      <View>
        <Text>
          Cards:{name}
        </Text>
        <Text>
          Num:{num}
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
