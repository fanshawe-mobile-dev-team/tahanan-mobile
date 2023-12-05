import React, { useRef, useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.light,
    padding: 20,
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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  // TODO: submit function
  const handleSubmit = () => {
    const input = { username, password };

    console.log(input);
  };

  return (
    <ScrollView automaticallyAdjustKeyboardInsets style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
      </View>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          label="Username"
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
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
  );
}

export default LoginScreen;
