import React, { Component } from 'react'
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { white, purple } from '../utils/colors'

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
    // alert(item.name + ':' + item.num)
    const { navigate } = this.props.navigation;
    navigate('Cards', item)
  }

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

        <FlatList
          data={this.state.desks}
          renderItem={({index, item}) =>
            <TouchableOpacity key={index} activeOpacity={1} onPress={() => {
              this.clickItem(item)
            }}>
              <View>
                <View style={styles.item}>
                  <Text>{item.name}</Text>
                  <Text>Count:{item.num}</Text>
                </View>
                <Text style={styles.line}></Text>
              </View>
            </TouchableOpacity>
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
