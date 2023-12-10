import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import React, { useRef } from 'react';
import screens from './src/components/screens/screens';
import defaultTheme from './src/theme/defaultTheme';
import { ProfileProvider } from './src/components/hoc/ProfileContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef();

  return (
    <ProfileProvider>
      <NavigationContainer ref={navigationRef} theme={defaultTheme}>
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
      </NavigationContainer>
    </ProfileProvider>
  );
}
