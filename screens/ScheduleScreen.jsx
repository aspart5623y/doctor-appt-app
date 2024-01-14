import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Tab from '../components/Tab';
import ScheduleCard from '../components/ScheduleCard';

const ScheduleScreen = () => {
  const [active, setActive] = useState('upcoming');

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginTop: 20 }}>
        <Tab {...{ active, setActive }} name="Upcoming schedule" slug="upcoming" />
        <Tab {...{ active, setActive }} name="Completed schedule" slug="completed" />
        <Tab {...{ active, setActive }} name="Cancelled schedule" slug="cancelled" />
      </ScrollView>

      <ScrollView style={styles.container} keyboardShouldPersistTaps='false'>
        <View style={styles.scheduleContainer}>
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 24,
    paddingHorizontal: 24,
    height: Platform.OS === 'ios' ? screenHeight - 225 : screenHeight - 130,
  },
  scheduleContainer: {
    marginBottom: 30
  }
})


export default ScheduleScreen