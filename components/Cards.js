import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import DeskItem from './DeskItem'

class Cards extends Component {
  render() {
    const { navigate, state } = this.props.navigation;
    const { name, num }  = state.params //取得正向传值
    // console.log('Cards state.params:', state.params);

    return (
      <View>
        <Button
          title="＋"
          onPress={() =>
            navigate('AddCard')
          }
        />
        <Text>
          Cards:{name}
        </Text>
        <Text>
          Num:{num}
        </Text>
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
