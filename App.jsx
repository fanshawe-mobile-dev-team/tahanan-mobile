import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import React, { useRef } from 'react';
import screens from './src/components/screens/screens';
import defaultTheme from './src/theme/defaultTheme';
import { ProfileProvider } from './src/components/hoc/ProfileContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef();

  const handelSelectRoute = (screen) => {
    navigationRef.current?.navigate(screen.name);
  };

  return (
    <ProfileProvider>
      <NavigationContainer ref={navigationRef} theme={defaultTheme}>
        <SelectDropdown
          data={screens}
          buttonStyle={{ width: '100%', backgroundColor: 'black' }}
          buttonTextStyle={{ color: 'white' }}
          onSelect={handelSelectRoute}
          buttonTextAfterSelection={(item) => item.name}
          rowTextForSelection={(item) => item.name}
        />
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
