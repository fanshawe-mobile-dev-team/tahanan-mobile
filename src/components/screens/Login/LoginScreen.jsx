import React, { useRef, useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  image: {
    width: '100vw',
    aspectRatio: 1,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  form: {
    padding: 20,
  },
  input: {
    marginBottom: 20,
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
      <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="Username"
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <TextInput
          ref={passwordRef}
          style={styles.input}
          mode="outlined"
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          onSubmitEditing={handleSubmit}
        />
        <Button mode="contained" onPress={handleSubmit}>Login</Button>
      </View>
    </ScrollView>
  );
}

export default LoginScreen;
