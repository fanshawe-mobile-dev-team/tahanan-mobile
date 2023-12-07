/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerButton: {
    color: colors.primary.main,
    fontWeight: 'bold',
  },
});

function CreateHomeScreen({ navigation }) {
  const [name, setName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');

  return (
    <Container>
      <Text style={commonStyles.displayHeading}>Create a New Home</Text>
      <Text style={commonStyles.displaySubheading}>
        Creating a new home gives you the flexibility to set up tasks and manage your household in a way that suits your unique preferences.
      </Text>
      <View>
        <TextInput
          style={commonStyles.commonInput}
          label="Home Name"
          placeholder="Enter a unique home name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          // ref={addressLine1Ref}
          style={commonStyles.commonInput}
          label="Address Line 1"
          placeholder="Enter a address line 1"
          value={addressLine1}
          onChangeText={setAddressLine1}
        />
        <TextInput
          // ref={addressLine1Ref}
          style={commonStyles.commonInput}
          label="Address Line 2"
          placeholder="Enter a address line 2"
          value={addressLine2}
          onChangeText={setAddressLine2}
        />
        <TextInput
          // ref={addressLine1Ref}
          style={commonStyles.commonInput}
          label="City"
          placeholder="Enter a city"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          // ref={addressLine1Ref}
          style={commonStyles.commonInput}
          label="Province"
          placeholder="Enter province"
          value={province}
          onChangeText={setProvince}
        />
        <TextInput
          // ref={addressLine1Ref}
          style={commonStyles.commonInput}
          label="Postal Code"
          placeholder="Enter postal code"
          value={postalCode}
          onChangeText={setPostalCode}
        />
        <Button mode="contained">Register Home</Button>
      </View>
      <View style={styles.footer}>
        <Text>Home already exists? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('JoinHome')}>
          <Text style={styles.footerButton}>Join an Existing Home</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default CreateHomeScreen;
