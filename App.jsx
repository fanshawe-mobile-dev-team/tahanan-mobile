import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, { useRef } from 'react';
import DashboardScreen from './src/components/screens/Dashboard/DashboardScreen';
import ProfileScreen from './src/components/screens/Profile/ProfileScreen';
import LoginScreen from './src/components/screens/Login/LoginScreen';
import RegisterScreen from './src/components/screens/Register/RegisterScreen';
import PostRegisterScreen from './src/components/screens/PostRegister/PostRegisterScreen';
import CreateHomeScreen from './src/components/screens/CreateHome/CreateHomeScreen';
import SearchHomeScreen from './src/components/screens/SearchHome/SearchHomeScreen';
import JoinHomeScreen from './src/components/screens/JoinHome/JoinHomeScreen';
import TaskListScreen from './src/components/screens/TaskList/TaskListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef();
  const screens = [
    { name: 'Login', component: LoginScreen, options: { headerShown: false } },
    { name: 'Register', component: RegisterScreen },
    { name: 'PostRegister', component: PostRegisterScreen, options: { headerShown: false } },
    { name: 'CreateHome', component: CreateHomeScreen },
    { name: 'SearchHome', component: SearchHomeScreen },
    { name: 'JoinHome', component: JoinHomeScreen },
    { name: 'Dashboard', component: DashboardScreen, options: { headerShown: false } },
    { name: 'TaskList', component: TaskListScreen },
    { name: 'Profile', component: ProfileScreen },
  ];

  const handelSelectRoute = (screen) => {
    navigationRef.current?.navigate(screen.name);
  };

  return (

    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {screens.map((screen) => (
          <Stack.Screen
            key={`screen-${screen.name}`}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Stack.Navigator>
      <StatusBar />
      <SelectDropdown
        data={screens}
        buttonStyle={{ width: '100%', backgroundColor: 'black' }}
        buttonTextStyle={{ color: 'white' }}
        onSelect={handelSelectRoute}
        buttonTextAfterSelection={(item) => item.name}
        rowTextForSelection={(item) => item.name}
      />
    </NavigationContainer>
  );
}
