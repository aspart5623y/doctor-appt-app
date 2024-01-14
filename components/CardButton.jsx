import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const CardButton = () => {
  return (
    <TouchableOpacity accessibilityRole="button" style={styles.button}>
      <Text style={styles.text}>Detail</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    textAlign: 'center',
    borderRadius: 100,
    backgroundColor: '#63b4ff19'
  },
  text: {
    color: "#4894FE",
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign: 'center'
  }
})

export default CardButton