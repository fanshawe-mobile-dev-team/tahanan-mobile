import React from 'react';
import {
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, Avatar } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
    marginLeft: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  assigneeContainer: {
    marginTop: 10,
  },
  assignee: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
});

function TaskScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>
            Due:
            {' '}
            <Text style={styles.bold}>11/13/2023</Text>
          </Text>
          <Text style={styles.text}>
            Created Date:
            {' '}
            <Text style={styles.bold}>11/10/2023</Text>
          </Text>
          <View style={styles.assigneeContainer}>
            <Text style={styles.text}>Assigned to:</Text>
            <View style={styles.assignee}>
              <Avatar.Icon size={25} icon="account" />
              <Text style={styles.text}>jdoe123</Text>
            </View>
            <View style={styles.assignee}>
              <Avatar.Icon size={25} icon="account" />
              <Text style={styles.text}>ssmith2</Text>
            </View>
          </View>
          <Text style={commonStyles.displayHeading}>
            Description
          </Text>
          <Text style={commonStyles.displaySubheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <View style={styles.actions}>
            <Button mode="contained">Mark as Complete</Button>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default TaskScreen;
