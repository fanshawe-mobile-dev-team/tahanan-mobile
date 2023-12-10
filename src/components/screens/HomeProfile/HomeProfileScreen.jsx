import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Avatar, Chip, Divider, IconButton,
} from 'react-native-paper';
import Container from '../../common/Container';
import { useProfile } from '../../hoc/ProfileContext';
import { acceptHomeRequest, cancelHomeRequest, fetchHomeRequests } from '../../../utils/api/homeApi';
import { DEFAULT_AVATAR_IMAGE } from '../../../utils/api/constants';
import colors from '../../../theme/colors';
import home2 from '../../../../assets/home2.jpg';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    height: 120,
    width: '100%',
    borderRadius: 24,
  },
  actions: {
    paddingVertical: 48,
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  actionSeparator: {
    marginVertical: 12,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
    fontSize: 24,
  },
  homeName: {
    fontWeight: 'bold',
    marginBottom: 6,
    fontSize: 24,
    textAlign: 'center',
  },
  user: {
    marginBottom: 12,
    fontSize: 24,
    textAlign: 'center',
  },
  description: {
    marginVertical: 12,
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  subHeading: {
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'left',
    fontSize: 20,
  },
  homeRequest: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.outline.main,
    padding: 10,
    borderRadius: 20,
    gap: 10,
  },
  homeRequestName: {
    flexGrow: 1,
  },
  homeRequestActions: {
    flexDirection: 'row',
  },
  userList: {
    marginVertical: 6,
  },
});

function HomeProfileScreen() {
  const { profile, reloadHome } = useProfile();
  const { home } = profile;

  const [homeRequests, setHomeRequests] = useState([]);

  const getHomeRequests = async () => {
    const requests = await fetchHomeRequests(home.name);

    if (requests?.length) {
      setHomeRequests(requests);
    }
  };

  useEffect(() => {
    getHomeRequests();
  }, []);

  const isOwner = home.ownerId === profile.username;

  const handleAcceptHomeRequest = async (id) => {
    try {
      await acceptHomeRequest(id);

      setHomeRequests(homeRequests.filter((request) => request.id !== id));
      reloadHome();
    } catch ({ message }) {
      Alert.alert('Failed to Accept Request', message);
    }
  };

  const handleRejectHomeRequest = async (id) => {
    try {
      await cancelHomeRequest(id);

      setHomeRequests(homeRequests.filter((request) => request.id !== id));
    } catch ({ message }) {
      Alert.alert('Failed to Reject Request', message);
    }
  };

  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image source={home2} style={styles.image} />
      </View>
      <Text style={styles.homeName}>
        {home.name}
      </Text>
      <Text style={styles.user}>
        <Text>by </Text>
        <Text style={{ color: colors.tertiary.main, fontWeight: 'bold' }}>{home.ownerId}</Text>
      </Text>
      <Text style={styles.description}>
        {home.description}
      </Text>
      <Divider />
      <Text style={styles.subHeading}>
        Home Members:
      </Text>
      {home.users?.map((user) => (
        <Chip icon="account-circle" key={user} style={styles.userList}>{user}</Chip>
      ))}

      {isOwner && homeRequests?.length
        ? (
          <>
            <Divider />
            <Text style={styles.subHeading}>
              Home Member Requests:
            </Text>
            {homeRequests.map(({ userId, id }) => (
              <View key={userId} style={styles.homeRequest}>
                <Avatar.Image source={DEFAULT_AVATAR_IMAGE} size={48} />
                <Text style={styles.homeRequestName}>{userId}</Text>
                <View style={styles.homeRequestActions}>
                  <IconButton mode="contained" icon="plus" onPress={() => handleAcceptHomeRequest(id)} />
                  <IconButton mode="contained" icon="close" onPress={() => handleRejectHomeRequest(id)} />
                </View>
              </View>
            ))}
          </>
        ) : null}
      <View />
    </Container>
  );
}

export default HomeProfileScreen;
