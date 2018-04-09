import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { white, purple } from '../utils/colors'

export default function DeskItem ({ index, data, itemOnPress }) {
  return (
    <TouchableOpacity key={index} activeOpacity={1} onPress={() => {
      itemOnPress(data)
    }}>
      <View style={styles.item}>
        <Text>{data.name}</Text>
        <Text>Count:{data.num}</Text>
      </View>
      <Text style={styles.line}></Text>
    </TouchableOpacity>
  )
}

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
