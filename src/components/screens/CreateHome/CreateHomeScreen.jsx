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
  const [description, setDescription] = useState('This is an awesome home!');

  const handleSubmit = async () => {
    try {
      const input = {
        ownerId: profile.username,
        name,
        description,
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
          label="Description"
          placeholder="Enter description"
          value={description}
          multiline
          numberOfLines={6}
          onChangeText={setDescription}
        />
        <Button mode="contained" onPress={handleSubmit}>Register Home</Button>
      </View>
      <View style={styles.footer}>
        <Text>Home already exists? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SearchHome')}>
          <Text style={styles.footerButton}>Join an Existing Home</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

export default CreateHomeScreen;
