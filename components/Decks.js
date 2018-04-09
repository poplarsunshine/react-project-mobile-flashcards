import React, { Component } from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { white, purple, orange } from '../utils/colors'
import { fetchDecksResults } from '../utils/api'
import DeckItem from './DeckItem'

class Decks extends Component {

  state = {
    decksObj: {}
  }

  clickItem = (item) => {
    const { navigate } = this.props.navigation;
    navigate('Cards', item)
  }

  componentWillMount () {
    fetchDecksResults((obj) => {
      console.log('decks callback obj:', obj);
      this.setState({
        decksObj : obj
      })
    })
  }

  render() {
    const { navigate } = this.props.navigation;
    const decks = Object.values(this.state.decksObj)
    console.log('render decks:', decks);

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
          data={decks}
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
