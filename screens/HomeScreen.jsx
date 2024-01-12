import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BlueCard from '../components/BlueCard'
const logo = require('../assets/logo.png')

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.hello}>Hello,</Text>
          <Text style={styles.name}>Hi James</Text>
        </View>

        <Image
          source={logo}
          style={styles.logo}
        />
      </View>

      <BlueCard />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32
  },
  hello: {
    color: "#8696BB", 
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    marginBottom: 6
  },
  name: {
    color: "#0D1B34",
    fontSize: 20,
    fontWeight: "700"
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 100,
    objectFit: "cover"
  }
});

export default HomeScreen