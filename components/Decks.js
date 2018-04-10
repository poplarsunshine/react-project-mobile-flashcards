import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import { white, purple, orange } from '../utils/colors'
import { fetchDecksResults } from '../utils/api'
import { setLocalNotification } from '../utils/helpers'
import DeckItem from './DeckItem'

class Decks extends Component {

  state = {
    decksObj: {}
  }

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
      this.setState({
        decksObj : obj
      })
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
    console.log('render decks:', decks);

    const decksArray = Object.values(this.state.decksObj)
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

function mapStateToProps (desks) {
  return {
    desks
  }
}

export default connect(
  mapStateToProps,
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
