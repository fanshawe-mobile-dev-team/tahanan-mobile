/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Alert,
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
import colors from '../../../theme/colors';
import { createHome } from '../../../utils/api/homeApi';
import { useProfile } from '../../hoc/ProfileContext';

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
  const { profile, setHome } = useProfile();
  const [name, setName] = useState('home1');
  const [addressLine1, setAddressLine1] = useState('line1');
  const [addressLine2, setAddressLine2] = useState('line2');
  const [city, setCity] = useState('city');
  const [province, setProvince] = useState('province');
  const [postalCode, setPostalCode] = useState('12345');

  const handleSubmit = async () => {
    try {
      const input = {
        ownerId: profile.username,
        name,
        addressLine1,
        addressLine2,
        city,
        province,
        postalCode,
      };

      const newHome = await createHome(input);
      setHome(newHome);
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Unsuccessful', error.message);
    }
  };

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
        <Button mode="contained" onPress={handleSubmit}>Register Home</Button>
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
