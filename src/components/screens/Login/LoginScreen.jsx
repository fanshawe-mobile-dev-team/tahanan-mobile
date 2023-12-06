import React, { useRef, useState } from 'react';
import {
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import colors from '../../../theme/colors';
import { loginUser } from '../../../utils/api/authApi';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.light,
    padding: 20,
    // flex: 1,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 24,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signupButton: {
    color: colors.primary.main,
    fontWeight: 'bold',
  },
});

function LoginScreen() {
  const [email, setEmail] = useState('test@email.com');
  const [password, setPassword] = useState('password');

  const passwordRef = useRef();

  const handleSubmit = async () => {
    if (!email || !password) {
      console.log('Invalid');
      return;
    }

    const user = await loginUser(email, password);

    console.log('SIGN IN', user);
    // TODO: Navigate to Dashboard
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Login</Text>
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
            onSubmitEditing={handleSubmit}
          />
          <Button mode="contained" onPress={handleSubmit}>Login</Button>
        </View>
        <View style={styles.signupContainer}>
          <Text>No account yet? </Text>
          <TouchableOpacity>
            <Text style={styles.signupButton}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
