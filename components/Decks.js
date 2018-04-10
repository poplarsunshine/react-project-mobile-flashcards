import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionSetDecks } from '../actions'

import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { white, purple, orange } from '../utils/colors'
import { fetchDecksResults } from '../utils/api'
import { setLocalNotification } from '../utils/helpers'
import DeckItem from './DeckItem'

class Decks extends Component {

  addDeck = () => {
    const callback = () => {
      this.getDecks()
    }
    const { navigate } = this.props.navigation;
    navigate('AddDeck', { callback })
  }

  clickItem = (item) => {
    const { navigate } = this.props.navigation;
    navigate('Cards', item)
  }

  getDecks = () => {
    fetchDecksResults((obj) => {
      this.props.actionSetDecks(obj);
    })
  }

  componentWillMount () {
    this.getDecks()
  }

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    const { navigate } = this.props.navigation;
    const { decks } = this.props
    const decksArray = Object.values(decks)
    console.log('render decksArray:', decksArray);

    return (
      <View>
        <Button
          color='#f26f28'
          title="＋ Add Deck"
          onPress={this.addDeck}
        />

        <FlatList
          data={decksArray}
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

function mapStateToProps (decks) {
  return decks
}

function mapDispatchToProps (dispatch) {
    return {
        actionSetDecks: (data) => dispatch(actionSetDecks(data)),
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks)

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
