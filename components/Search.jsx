import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const Search = () => {
  const [searchVal, setSearchVal] = useState('');

  return (
    <View style={styles.searchBar}>
      <Feather name="search" size={24} color="#8696BB" />
      <TextInput
        style={styles.input}
        onChangeText={setSearchVal}
        value={searchVal}
        placeholder='Search doctor or health issue'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    padding: 16,
    alignItems: "center",
    gap: 12,
    borderRadius: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 24
  },
  input: {
    color: "#8696BB",
    fontSize: 15,
    fontStyle: "normal",
    height: "100%",
    flex: 1,
  }
})

export default Search