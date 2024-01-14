import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Tag = ({ name, icon }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    justifyContent: 'center',
  },
  iconContainer: {
    padding: 24,
    borderRadius: 100,
    backgroundColor: "#FAFAFA"
  },
  name: {
    color: "#8696BB",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: 'center'
  }
})

export default Tag