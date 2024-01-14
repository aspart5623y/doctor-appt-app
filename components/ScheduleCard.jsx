import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Feather, Ionicons } from '@expo/vector-icons';
import CardButton from './CardButton';

const avatar = require('../assets/avatar-2.png')


const ScheduleCard = () => {
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
      </View>

      <View style={styles.divider}></View>

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeHolder}>
          <Ionicons name="calendar-outline" size={16} color="#8696BB" />
          <Text style={styles.dateTimeText}>Sunday, 12 June</Text>
        </View>

        <View style={styles.dateTimeHolder}>
          <Feather name="clock" size={16} color="#8696BB" />
          <Text style={styles.dateTimeText}>11:00 - 12:00 AM</Text>
        </View>
      </View>
      <CardButton />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#5A75A70A',
    shadowOffset: { width: 2, height: 12 },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 2,
    marginBottom: 16
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
    color: '#0D1B34',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    marginBottom: 8
  },
  role: {
    color: "#8696BB",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400"
  },
  divider: {
    marginVertical: 16,
    height: 1,
    width: '100%',
    backgroundColor: '#F5F5F5'
  },
  dateTimeContainer: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
    marginBottom: 20
  },
  dateTimeHolder: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dateTimeText: {
    color: "#8696BB",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400"
  }
});

export default ScheduleCard