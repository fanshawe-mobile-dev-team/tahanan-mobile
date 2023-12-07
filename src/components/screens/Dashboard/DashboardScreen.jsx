import React, { useRef, useState } from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {
  Button,
  TextInput,
  List,
  MD3Colors,
  Icon,
  Card,
} from 'react-native-paper';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 24,
  },
  subheading: {
    marginBottom: 28,
  },
});

function DashboardScreen() {
  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <ScrollView>
        <Card>
          <Card.Content>
            <Text variant="titleLarge">Hello, Test User!</Text>
            <Text variant="bodyMedium">You have 12 Tasks today</Text>
          </Card.Content>
        </Card>
        <List.Section>
          <List.Subheader>Tasks Today</List.Subheader>
          <List.Item
            title="Task 1"
            description="Wash Dishes"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="Task 2"
            description="Shovel Snow"
            left={() => (
              <List.Icon color={MD3Colors.tertiary70} icon="folder" />
            )}
          />
        </List.Section>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default DashboardScreen;
