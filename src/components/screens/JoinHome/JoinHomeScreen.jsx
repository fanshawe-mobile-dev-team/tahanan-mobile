import React from 'react';
import {
  Alert,
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import { sendHomeRequest } from '../../../utils/api/homeApi';
import { useProfile } from '../../hoc/ProfileContext';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    aspectRatio: 3 / 2,
    borderRadius: 24,
  },
  actionSeparator: {
    marginVertical: 12,
    textAlign: 'center',
  },
});

function JoinHomeScreen({ navigation, route }) {
  const {
    home: {
      name,
      ownerId,
      description,
    },
  } = route.params;
  const { profile: { username } } = useProfile();

  const handleJoin = async () => {
    try {
      const input = {
        userId: username,
        homeId: name,
        ownerId,
      };

      await sendHomeRequest(input);
      navigation.navigate('PostRegister');
    } catch ({ message }) {
      Alert.alert('Request Failed', message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://picsum.photos/600' }} style={styles.image} />
        </View>
        <Text style={commonStyles.displayHeading}>
          {name}
        </Text>
        <Text style={commonStyles.displaySubheading}>
          {`by ${ownerId}`}
        </Text>
        <Text style={commonStyles.displaySubheading}>
          {description}
        </Text>
        <View style={styles.actions}>
          <Button mode="contained" onPress={handleJoin}>Join this Home</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default JoinHomeScreen;
