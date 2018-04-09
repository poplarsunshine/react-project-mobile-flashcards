import React from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo'
import { purple, white } from './utils/colors'

import { StackNavigator } from 'react-navigation'
import Desks from './components/Desks'
import Cards from './components/Cards'
import AddDesk from './components/AddDesk'
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
  Desks: {
    screen: Desks,
    navigationOptions : {
        title: 'Desks'
    }
  },
  Cards: {
    screen: Cards,
    navigationOptions : {
        title: 'Cards'
    }
  },
  AddDesk: {
    screen: AddDesk,
    navigationOptions : {
        title: 'Add Desk'
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
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        <MainNavigator/>
      </View>
    );
  }
}
