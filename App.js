import React from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo'
import { purple, white } from './utils/colors'

function AppStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
      </View>
    );
  }
}
