import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button, Avatar, List,
} from 'react-native-paper';
import { useProfile } from '../../hoc/ProfileContext';
import Container from '../../common/Container';
import { DEFAULT_AVATAR_IMAGE } from '../../../utils/api/constants';
import colors from '../../../theme/colors';
import commonStyles from '../../../theme/commonStyles';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
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
  homeName: {
    marginBottom: 12,
    fontSize: 24,
    textAlign: 'center',
  },
  user: {
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 12,
    fontSize: 24,
    textAlign: 'center',
    color: colors.primary.dark60,
  },
  listIcon: {
    marginLeft: 20,
    marginRight: 20,
    color: colors.primary.main,
  },
});

function ProfileScreen({ navigation }) {
  const { profile, logout } = useProfile();

  const handleLogout = () => {
    logout();
    navigation.navigate('Login');
  };

  return (
    <Container>
      <View style={styles.imageContainer}>
        <Avatar.Image size={150} source={DEFAULT_AVATAR_IMAGE} />
        <Text style={styles.user}>
          {profile.username}
        </Text>
        <Text style={styles.homeName}>
          <Text> Member of </Text>
          <Text style={{ color: colors.tertiary.main, fontWeight: 'bold' }}>{profile.home.name}</Text>
        </Text>
      </View>
      <View>
        <List.Item
          style={{ ...commonStyles.taskListItem, fontWeight: 'bold' }}
          title={`${profile.firstName} ${profile.lastName}`}
          left={(props) => <List.Icon {...props} icon="account" style={styles.listIcon} />}
        />
        <List.Item
          style={{ ...commonStyles.taskListItem, fontWeight: 'bold' }}
          title={`${profile.email}`}
          left={(props) => <List.Icon {...props} icon="email" style={styles.listIcon} />}
        />

        <List.Item
          style={{ ...commonStyles.taskListItem, fontWeight: 'bold' }}
          title={`${profile.phone}`}
          left={(props) => <List.Icon {...props} icon="phone" style={styles.listIcon} />}
        />

        <Button style={{ backgroundColor: colors.error.main, marginTop: 100 }} mode="contained" onPress={handleLogout}>Sign Out</Button>
      </View>
    </Container>
  );
}

export default ProfileScreen;
