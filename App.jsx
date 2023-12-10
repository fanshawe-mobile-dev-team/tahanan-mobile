/* eslint-disable react/style-prop-object */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import screens from './src/components/screens/screens';
import defaultTheme from './src/theme/defaultTheme';
import { ProfileProvider } from './src/components/hoc/ProfileContext';
import colors from './src/theme/colors';

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
        <StatusBar animated style="light" backgroundColor={colors.primary.main} />
      </NavigationContainer>
    </ProfileProvider>
  );
}
