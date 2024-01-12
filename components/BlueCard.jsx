import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const avatar = require('../assets/avatar-1.png')

const BlueCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar}  />
          <View>
            <Text style={styles.name}>Dr. Imran Syahir</Text>
            <Text style={styles.role}>General Doctor</Text>
          </View>
        </View>

        <Entypo name="chevron-thin-right" size={24} color="white" />
      </View>

      <View style={styles.divider}></View>

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeHolder}>
          <Ionicons name="calendar-outline" size={16} color="white" />
          <Text style={styles.dateTimeText}>Sunday, 12 June</Text>
        </View>

        <View style={styles.dateTimeHolder}>
          <Feather name="clock" size={16} color="white" />
          <Text style={styles.dateTimeText}>11:00 - 12:00 AM</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: '#4894FE'
  },
  avatar: {
    objectFit: "cover",
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    borderRadius: 100,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  avatarContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  name: {
    color: '#FFF',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    marginBottom: 8
  },
  role: {
    color: "#CBE1FF",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400"
  },
  divider: {
    marginVertical: 16,
    height: 1,
    width: '100%',
    backgroundColor: '#fff',
    opacity: 0.15
  },
  dateTimeContainer: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  dateTimeHolder: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dateTimeText: {
    color: "#FFF",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400"
  }
});

export default BlueCard