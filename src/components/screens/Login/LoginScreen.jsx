import React, { useRef, useState } from 'react';
import {
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import colors from '../../../theme/colors';
import { useProfile } from '../../hoc/ProfileContext';
import { fetchHome, fetchUserRequest } from '../../../utils/api/homeApi';
import Container from '../../common/Container';
import commonStyles from '../../../theme/commonStyles';

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
    textAlign: 'center',
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
  errorContainer: {
    padding: 16,
    opacity: 0,
  },
  errorMessage: {
    color: colors.error.main,
    textAlign: 'center',
  },
});

function LoginScreen({ navigation }) {
  const { login } = useProfile();

  const [email, setEmail] = useState('test@email.com');
  const [password, setPassword] = useState('password');
  const [showError, setShowError] = useState(false);

  const passwordRef = useRef();

  const handleSubmit = async () => {
    setShowError(false);
    if (!email || !password) {
      return;
    }

    try {
      const user = await login({ email, password });
      const homeRequest = await fetchUserRequest(user.username);

      if (user.homeId) {
        navigation.navigate('Main');
      } else if (homeRequest) {
        const home = await fetchHome(homeRequest.homeId);
        navigation.navigate('JoinHome', { home, hasActiveRequest: true });
      } else {
        navigation.navigate('PostRegister');
      }
    } catch (error) {
      console.log(error);
      setShowError(true);
    }
  };

  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
      </View>
      <View style={styles.form}>
        <Text style={[commonStyles.displayHeading, styles.title]}>Login</Text>
        <View style={[styles.errorContainer, { opacity: showError ? 1 : 0 }]}>
          <Text style={styles.errorMessage}>You have entered invalid credentials.</Text>
        </View>
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
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupButton}>Sign-Up</Text>
        </TouchableOpacity>
      </View>

    </Container>
  );
}

export default LoginScreen;
