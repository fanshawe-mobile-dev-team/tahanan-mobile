import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  subHeading: {
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'left',
    fontSize: 20,
  },
});

function ProfileScreen() {
  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
        <Text style={styles.subHeading}>
          Leviel
        </Text>
        <Text style={styles.displayHeading}>
          Home Admin
        </Text>
      </View>
      <View>
        <TextInput
          style={commonStyles.commonInput}
          label="First Name"
          placeholder="Enter first name"
        />
        <TextInput
          style={commonStyles.commonInput}
          label="Last Name"
          placeholder="Enter last name"
        />
        <TextInput
          style={commonStyles.commonInput}
          label="Email"
          placeholder="Enter email"
        />
        <TextInput
          style={commonStyles.commonInput}
          label="Contact Number"
          placeholder="Enter phone number"
        />
        <TextInput
          style={commonStyles.commonInput}
          label="Username"
          placeholder="Enter username"
        />
        <Button mode="contained">Sign Out</Button>
      </View>
    </Container>
  );
}

export default ProfileScreen;
