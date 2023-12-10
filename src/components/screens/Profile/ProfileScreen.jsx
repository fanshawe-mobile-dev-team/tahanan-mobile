import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';
import { useProfile } from '../../hoc/ProfileContext';
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
  inputBox: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 10,
  },
  userInfo: {
    marginTop: 5,
    fontSize: 20,
  },
});

function ProfileScreen({ navigation }) {
  const { profile, logout } = useProfile();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  console.log(profile);

  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
        <Text style={styles.subHeading}>
          {profile.username}
        </Text>
        <Text style={styles.displayHeading}>
          {profile.username}
        </Text>
      </View>
      <View>
        <View style={styles.inputBox}>
          <Text style={styles.displayHeading}>First Name</Text>
          <Text style={styles.userInfo}>{profile.firstName}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.displayHeading}>Last Name</Text>
          <Text style={styles.userInfo}>{profile.lastName}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.displayHeading}>Email</Text>
          <Text style={styles.userInfo}>{profile.email}</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.displayHeading}>Contact Number</Text>
          <Text style={styles.userInfo}>{profile.phone}</Text>
        </View>
        <Button mode="contained" onPress={handleLogout}>Sign Out</Button>
      </View>
    </Container>

  );
}

export default ProfileScreen;
