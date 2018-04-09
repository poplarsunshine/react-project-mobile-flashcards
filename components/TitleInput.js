import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { white, purple } from '../utils/colors'

export default function TitleInput ({ title, value, inputOnChange}) {
  return (
    <View style={styles.titleInput}>
      <Text
        style={styles.text}
      >
        {title}
      </Text>
      <TextInput
        style={styles.input}
        value = {value}
        placeholder = {'please input'}
        onChangeText = {(value) => {
          inputOnChange(value)
        }}
      >
      </TextInput>
    </View>
  )
}

const styles = StyleSheet.create({

  text: {
    color: purple,
    fontSize: 20,
    width: 80,
    height: 40,
  },
  input: {
    backgroundColor: white,
    height: 40,
    padding: 10,
  },
})
