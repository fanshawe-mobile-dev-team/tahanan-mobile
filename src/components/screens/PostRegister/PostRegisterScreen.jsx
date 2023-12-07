import React from 'react';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import colors from '../../../theme/colors';
import HomeInvites from './HomeInvites';
import HomeRequests from './HomeRequests';

const styles = StyleSheet.create({
  actions: {
    paddingVertical: 48,
    borderBottomColor: colors.outline.main,
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  actionSeparator: {
    marginVertical: 12,
    textAlign: 'center',
  },
});

function PostRegisterScreen() {
  return (
    <ScrollView style={commonStyles.screenContainer}>
      <Text style={commonStyles.displayHeading}>
        You don’t belong to a home yet
      </Text>
      <Text style={commonStyles.displaySubheading}>
        Register to a home to unlock the full potential of Tahanan and
        experience a seamless way to manage your household tasks.
      </Text>
      <View style={styles.actions}>
        <Button mode="contained">Join an Existing Home</Button>
        <Text style={styles.actionSeparator}>or</Text>
        <Button mode="contained">Create a New Home</Button>
      </View>
      <HomeInvites />
      <HomeRequests />
    </ScrollView>
  );
}

export default PostRegisterScreen;
