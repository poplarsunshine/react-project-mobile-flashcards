import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { white, purple } from '../utils/colors'

export default function AnswerItem ({ answer, itemOnPress, showContent }) {
  return (
    (showContent) ?
    <View>
      <Text>ANSWER:{answer}</Text>
    </View>
    :
    <View>
      <Button
        title="Show Answer"
        onPress={() => {
          itemOnPress()
        }}
      />
    </View>
  )
}
