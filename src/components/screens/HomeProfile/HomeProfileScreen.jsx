import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Divider } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import Container from '../../common/Container';
// import colors from '../../../theme/colors';
import { useProfile } from '../../hoc/ProfileContext';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    marginBottom: 16,
  },
  image: {
    height: 120,
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
  subHeading: {
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'left',
    fontSize: 20,
  },
});

function HomeProfileScreen() {
  const { profile } = useProfile();
  console.log(profile);

  const { homeRequest, setHomeRequest } = useState(false);
  const { homeRequestUsers, setHomeRequestUsers } = useState([]);

  const isOwner = profile.home.ownerId === profile.username;

  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
      </View>
      <Text style={styles.title}>
        {profile.home.name}
      </Text>
      <Text style={commonStyles.displaySubheading}>
        {`by ${profile.home.ownerId}`}
      </Text>
      <Text style={commonStyles.displaySubheading}>
        {profile.home.description}
      </Text>
      <Divider />
      <Text style={styles.subHeading}>
        Home Members:
      </Text>
      {profile.home.users?.map((user) => <Text>{user}</Text>)}
      {isOwner && homeRequest
      && (
      <>
        <Divider />
        <Text style={styles.subHeading}>
          Home Member Requests:
        </Text>
        {homeRequestUsers?.map((user) => <Text>{user}</Text>)}
      </>
      )}
      <View />
    </Container>
  );
}

export default HomeProfileScreen;
