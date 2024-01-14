import React from 'react'
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BlueCard from '../components/BlueCard'
import Search from '../components/Search'
import Tag from '../components/Tag'
import { FontAwesome, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeDoctorCard from '../components/HomeDoctorCard'

const logo = require('../assets/logo.png')


const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'> 
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
        <Search />

        <View style={styles.tagsContainer}>
          <Tag 
            name="Covid 19" 
            icon={
              <FontAwesome name="snowflake-o" size={24} color="#4894FE" />
            } 
          />

          <Tag 
            name="Doctor" 
            icon={
              <FontAwesome name="user-md" size={24} color="#4894FE" />
            } 
          />

          <Tag 
            name="Medicine" 
            icon={
              <MaterialCommunityIcons name="pill" size={24} color="#4894FE" />
            } 
          />

          <Tag 
            name="Hospital" 
            icon={
              <FontAwesome5 name="hospital" size={24} color="#4894FE" />
            } 
          />

        </View>

        <Text style={styles.nearDoctor}>Near Doctor</Text>

        <View style={styles.doctorsContainer}>
          <HomeDoctorCard />
          <HomeDoctorCard />
          <HomeDoctorCard />
        </View>
      </ScrollView>
    </SafeAreaView> 
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 24,
    height: Platform.OS === 'ios' ? screenHeight - 150 : screenHeight - 60,
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
  }, 
  tagsContainer: {
    flexDirection: 'row',
    gap: 13,
    justifyContent: 'space-between',
    marginBottom: 32
  },
  nearDoctor: {
    color: "#0D1B34",
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    marginBottom: 16
  },
  doctorsContainer: {
    gap: 12,
    marginBottom: 40
  }
});

export default HomeScreen