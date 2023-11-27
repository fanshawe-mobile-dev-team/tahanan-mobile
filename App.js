import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./src/components/screens/Dashboard/DashboardScreen";
import ProfileScreen from "./src/components/screens/Profile/ProfileScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./src/components/screens/Register/RegisterScreen";
import { StyleSheet } from "react-native";
import PostRegisterScreen from "./src/components/screens/PostRegister/PostRegisterScreen";
import CreateHomeScreen from "./src/components/screens/CreateHome/CreateHomeScreen";
import SearchHomeScreen from "./src/components/screens/SearchHome/SearchHomeScreen";
import JoinHomeScreen from "./src/components/screens/JoinHome/JoinHomeScreen";
import TaskListScreen from "./src/components/screens/TaskList/TaskListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="PostRegister"
          component={PostRegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CreateHome" component={CreateHomeScreen} />
        <Stack.Screen name="SearchHome" component={SearchHomeScreen} />
        <Stack.Screen name="JoinHome" component={JoinHomeScreen} />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TaskList" component={TaskListScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
