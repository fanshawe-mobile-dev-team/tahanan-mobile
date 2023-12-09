import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import colors from '../../../theme/colors';
import Container from '../../common/Container';
import { fetchUserRequests } from '../../../utils/api/homeApi';
import { useProfile } from '../../hoc/ProfileContext';

const styles = StyleSheet.create({
  actions: {
    paddingVertical: 48,
    borderBottomColor: colors.outline.main,
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  actionSeparator: {
    marginVertical: 12,
    textAlign: 'center',
  },
});

function PostRegisterScreen({ navigation }) {
  const { profile } = useProfile();

  const [homeRequests, setHomeRequests] = useState([]);

  const getHomeRequests = async () => {
    const userRequests = await fetchUserRequests(profile.username);

    setHomeRequests(userRequests);
  };

  useEffect(() => {
    getHomeRequests();
  }, []);

  console.log(homeRequests);

  return (
    <Container>
      <Text style={commonStyles.displayHeading}>
        You don’t belong to a home yet
      </Text>
      <Text style={commonStyles.displaySubheading}>
        Register to a home to unlock the full potential of Tahanan and
        experience a seamless way to manage your household tasks.
      </Text>
      <View style={styles.actions}>
        <Button mode="contained" onPress={() => navigation.navigate('SearchHome')}>Join an Existing Home</Button>
        <Text style={styles.actionSeparator}>or</Text>
        <Button mode="contained" onPress={() => navigation.navigate('CreateHome')}>Create a New Home</Button>
      </View>
      {/* {homeRequests.length ? <HomeRequests homeRequests={homeRequests} /> : null} */}
    </Container>
  );
}

export default PostRegisterScreen;
