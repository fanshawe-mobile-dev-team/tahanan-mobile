import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from '../Dashboard/DashboardScreen';
import TaskListScreen from '../TaskList/TaskListScreen';
import CreateTaskScreen from '../CreateTask/CreateTaskScreen';
import HomeProfileScreen from '../HomeProfile/HomeProfileScreen';
import ProfileScreen from '../Profile/ProfileScreen';
import colors from '../../../theme/colors';

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      backBehavior="order"
      screenOptions={{
        tabBarStyle: {
          height: 60, // Adjust the height as needed
          backgroundColor: '#e3e1ec',
        },
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.outline.main,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="view-dashboard" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="TaskList"
        component={TaskListScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              color={color}
              size={26}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="CreateTask"
        component={CreateTaskScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box-outline" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="HomeProfile"
        component={HomeProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-account" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
