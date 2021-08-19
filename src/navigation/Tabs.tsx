import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {SearchScreen} from '../screens/SearchScreen';
import {Navigator} from './navigator';

interface IconProps {
  name: string;
  color: string;
  size: number;
}

const Tab = createBottomTabNavigator();
export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{...styles.scene}}
      screenOptions={{
        tabBarActiveTintColor: '#5856D6',
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 10 : 0,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: 60,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Navigator}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({color, size}) => (
            <Icon name="list-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name="search-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    backgroundColor: 'red',
    borderWidth: 0,
    elevation: 0,
  },
  scene: {
    backgroundColor: 'white',
  },
  tabOption: {},
  labelStyle: {
    marginBottom: Platform.OS === 'android' ? 10 : 0,
  },
});
