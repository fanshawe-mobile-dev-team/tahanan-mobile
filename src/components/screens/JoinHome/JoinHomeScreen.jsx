import React from 'react';
import {
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 24,
  },
  actionSeparator: {
    marginVertical: 12,
    textAlign: 'center',
  },
});

function JoinHomeScreen() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
        </View>
        <Text style={commonStyles.displayHeading}>
          Home 1
        </Text>
        <Text style={commonStyles.displaySubheading}>
          by homeowner 123
        </Text>
        <Text style={commonStyles.displaySubheading}>
          Register to a home to unlock the full potential of Tahanan and
          experience a seamless way to manage your household tasks.
        </Text>
        <View style={styles.actions}>
          <Button mode="contained">Join this Home</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default JoinHomeScreen;
