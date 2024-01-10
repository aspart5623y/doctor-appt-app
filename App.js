import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScheduleScreen from './screens/ScheduleScreen';
import HomeScreen from './screens/HomeScreen';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';


const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.bottomTabNav}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const icon = options.tabBarIcon ? options.tabBarIcon : null;
        const maxWidth = options.maxWidth ? options.maxWidth : 'auto';
        const activeIcon = options.activeTabBarIcon ? options.activeTabBarIcon : null;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress} 
            style={{ flex: isFocused ? 1 : 0, maxWidth: maxWidth, flexDirection: 'row', alignItems: 'center', color: isFocused ? '#63B4FF' : '#8696BB', backgroundColor: isFocused ?  "#63B4FF1A" : '#fff', padding: 12, gap: 8, borderRadius: 12 }}
          >
            {(icon && activeIcon) && React.cloneElement(isFocused ? activeIcon : icon, { color: isFocused ? '#63B4FF' : '#8696BB' })}
            {isFocused && <Text style={styles.navText}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <MyTabBar {...props} />}>
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={
              { 
                tabBarIcon: <Ionicons name="home-outline" size={24} />,
                activeTabBarIcon: <Ionicons name="home" size={24} />,
                maxWidth: 95
              }
            }
          />
          <Tab.Screen 
            name="Schedule" 
            component={ScheduleScreen} 
            options={
              { 
                tabBarIcon: <Ionicons name="calendar-outline" size={24} />,
                activeTabBarIcon: <Ionicons name="calendar-sharp" size={24} />,
                maxWidth: 115
              }
            }
          />
          <Tab.Screen 
            name="Messages" 
            component={ScheduleScreen} 
            options={
              { 
                tabBarIcon: <Ionicons name="chatbox-ellipses-outline" size={24} />,
                activeTabBarIcon: <Ionicons name="chatbox-ellipses" size={24} />,
                maxWidth: 120
              }
            }
          />
          <Tab.Screen 
            name="Profile" 
            component={ScheduleScreen} 
            options={
              { 
                tabBarIcon: <FontAwesome5 name="user" size={24} />,
                activeTabBarIcon: <FontAwesome5 name="user-alt" size={24} />,
                maxWidth: 95
              }
            }
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



const styles = StyleSheet.create({
  bottomTabNav: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    gap: 12,
    paddingTop: 16, 
    paddingBottom: 40, 
    paddingHorizontal: 24, 
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  navText: {
    color: "#63B4FF", 
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700"
  }
});