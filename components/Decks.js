import React, { Component } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { white, purple, orange } from '../utils/colors'
import DeckItem from './DeckItem'

class Decks extends Component {

  state = {
    Decks: [
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
          color='#f26f28'
          title="＋ Add Deck"
          onPress={() =>
            navigate('AddDeck')
          }
        />

        <FlatList
          data={this.state.Decks}
          renderItem={({index, item}) =>
              <DeckItem
                index={index}
                data={item}
                itemOnPress={(data) => {
                  this.clickItem(data)
                }}
              >
              </DeckItem>
          }
        />
      </View>
    )
  }
}

export default Decks

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
