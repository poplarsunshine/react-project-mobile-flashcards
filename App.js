import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import combineReducers from './reducers'

import { StatusBar, View } from 'react-native';
import { Constants } from 'expo'
import { purple, white } from './utils/colors'

import { StackNavigator } from 'react-navigation'
import Decks from './components/Decks'
import Cards from './components/Cards'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Test from './components/Test'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const MainNavigator = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions : {
        title: 'Decks'
    }
  },
  Cards: {
    screen: Cards,
    navigationOptions : {
        title: 'Cards'
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions : {
        title: 'Add Deck'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions : {
        title: 'Add Card'
    }
  },
  Test: {
    screen: Test,
    navigationOptions : {
        title: 'Testing'
    }
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(combineReducers)}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}
