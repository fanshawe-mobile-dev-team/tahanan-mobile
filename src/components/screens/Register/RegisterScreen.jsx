import React, { useRef, useState } from 'react';
import {
  View, Text, ScrollView, KeyboardAvoidingView, Alert,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { registerUser } from '../../../utils/api/authApi';
import commonStyles from '../../../theme/commonStyles';
import { useProfile } from '../../hoc/UserContext';

function RegisterScreen({ navigation }) {
  const { login } = useProfile();
  const [email, setEmail] = useState('test@email.com');
  const [password, setPassword] = useState('password');
  const [phone, setPhone] = useState('1234567890');
  const [username, setUsername] = useState('testUser');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  const passwordRef = useRef();
  const phoneRef = useRef();
  const usernameRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = async () => {
    const input = {
      email,
      password,
      phone,
      username,
      firstName,
      lastName,
    };

    try {
      await registerUser(input);

      await login({ email, password });

      navigation.navigate('Dashboard');
    } catch ({ message }) {
      Alert.alert('Registration Failed', message, [
        { text: 'OK' },
      ]);
    }
  };

  return (
    <KeyboardAvoidingView style={[commonStyles.keybardAvoiding]}>
      <ScrollView style={commonStyles.screenContainer}>
        <Text style={commonStyles.displayHeading}>Register an account</Text>
        <Text style={commonStyles.displaySubheading}>
          Enter the following information to create your account
        </Text>
        <View>
          <TextInput
            style={commonStyles.commonInput}
            label="Email"
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <TextInput
            ref={passwordRef}
            style={commonStyles.commonInput}
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => phoneRef.current.focus()}
          />
          <TextInput
            ref={phoneRef}
            style={commonStyles.commonInput}
            label="Phone"
            placeholder="Enter phone number"
            value={phone}
            onChangeText={setPhone}
            onSubmitEditing={() => usernameRef.current.focus()}
          />
          <TextInput
            ref={usernameRef}
            style={commonStyles.commonInput}
            label="Username"
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
            onSubmitEditing={() => firstNameRef.current.focus()}
          />
          <TextInput
            ref={firstNameRef}
            style={commonStyles.commonInput}
            label="First Name"
            placeholder="Enter first name"
            value={firstName}
            onChangeText={setFirstName}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <TextInput
            ref={lastNameRef}
            style={commonStyles.commonInput}
            label="Last Name"
            placeholder="Enter last name"
            value={lastName}
            onChangeText={setLastName}
          />
          <Button mode="contained" onPress={handleSubmit}>Submit</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
