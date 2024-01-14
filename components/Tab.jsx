import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Tab = ({ active, setActive, name, slug }) => {
  return (
    <TouchableOpacity 
      accessibilityRole="button" 
      onPress={() => setActive(slug)} 
      style={
        [ styles.tab, 
          { backgroundColor: active === slug ? '#63b4ff19' : '#FAFAFA' }
        ]
      }
    >
      <Text style={[styles.tabText, { color: active === slug ? "#4894FE" : '#8696BB', fontSize: active === slug ? 16 : 12 }]}>{name}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginHorizontal: 6
  },
  tabText: {
    fontStyle: "normal",
    fontWeight: "500",
  }
});

export default Tab