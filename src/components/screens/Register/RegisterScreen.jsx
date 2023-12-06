import React, { useRef, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView, KeyboardAvoidingView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';
import { registerUser } from '../../../utils/api/authApi';

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

function RegisterScreen({ navigation }) {
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

    const user = await registerUser(input);
    console.log('REGISTER INPUT', user);

    // TODO: Save Credentials to Context
    navigation.navigate('Dashboard');
  };

  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <ScrollView>
        <Text style={styles.heading}>Register an account</Text>
        <Text style={styles.subheading}>
          Enter the following information to create your account
        </Text>
        <View>
          <TextInput
            style={styles.input}
            label="Email"
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <TextInput
            ref={passwordRef}
            style={styles.input}
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => phoneRef.current.focus()}
          />
          <TextInput
            ref={phoneRef}
            style={styles.input}
            label="Phone"
            placeholder="Enter phone number"
            value={phone}
            onChangeText={setPhone}
            onSubmitEditing={() => usernameRef.current.focus()}
          />
          <TextInput
            ref={usernameRef}
            style={styles.input}
            label="Username"
            placeholder="Enter username"
            value={username}
            onChangeText={setUsername}
            onSubmitEditing={() => firstNameRef.current.focus()}
          />
          <TextInput
            ref={firstNameRef}
            style={styles.input}
            label="First Name"
            placeholder="Enter first name"
            value={firstName}
            onChangeText={setFirstName}
            onSubmitEditing={() => lastNameRef.current.focus()}
          />
          <TextInput
            ref={lastNameRef}
            style={styles.input}
            label="Last Name"
            placeholder="Enter last name"
            value={lastName}
            onChangeText={setLastName}
          />
          <Button mode="contained" onPress={handleSubmit}>Login</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default RegisterScreen;
