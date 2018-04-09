import React, { Component } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { white, purple } from '../utils/colors'
import DeskItem from './DeskItem'

class Desks extends Component {

  state = {
    desks: [
      {name: 'Devin', num: 0},
      {name: 'Jackson', num: 34},
      {name: 'James', num: 3},
      {name: 'Joel', num: 3},
      {name: 'John', num: 45},
      {name: 'Jillian', num: 0},
      {name: 'Jimmy', num: 0},
      {name: 'Julie', num: 25},
    ]
  }

  clickItem = (item) => {
    alert(item.name + ':' + item.num)
    const { navigate } = this.props.navigation;
    navigate('Cards', item)
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Button
          title="＋ Add Desk"
          onPress={() =>
            navigate('AddDesk')
          }
        />

        <FlatList
          data={this.state.desks}
          renderItem={({index, item}) =>
              <DeskItem
                index={index}
                data={item}
                itemOnPress={(data) => {
                  this.clickItem(data)
                }}
              >
              </DeskItem>
          }
        />
      </View>
    )
  }
}

export default Desks

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: white,
  },
  line: {
    height: 1,
    backgroundColor: purple,
  },
})
