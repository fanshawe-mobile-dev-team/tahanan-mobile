import React, { useState } from 'react';
import {
  Alert,
  Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View,
} from 'react-native';
import { Button } from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import { cancelHomeRequest, sendHomeRequest } from '../../../utils/api/homeApi';
import { useProfile } from '../../hoc/ProfileContext';
import colors from '../../../theme/colors';

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
  actions: {
    gap: 10,
  },
  actionSeparator: {
    marginVertical: 12,
    textAlign: 'center',
  },
  activeRequestContainer: {
    height: 32,
  },
  activeRequestText: {
    color: colors.outline.main,
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
    hasActiveRequest,
  } = route.params;
  const { profile: { username } } = useProfile();
  const [showCancel, setShowCancel] = useState(hasActiveRequest);

  const handleJoin = async () => {
    try {
      const input = {
        userId: username,
        homeId: name,
        ownerId,
      };

      await sendHomeRequest(input);
      setShowCancel(true);
    } catch ({ message }) {
      Alert.alert('Request Failed', message);
    }
  };

  const handleCancel = async () => {
    console.log('CANCEL');
    try {
      await cancelHomeRequest(`${name}-${username}`);
      setShowCancel(false);
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
        <View style={[styles.activeRequestContainer, { opacity: showCancel ? 1 : 0 }]}>
          <Text style={styles.activeRequestText}>
            You have an active request to join this home.
          </Text>
        </View>
        <View style={styles.actions}>
          {showCancel
            ? <Button mode="contained" buttonColor={colors.error.main} onPress={handleCancel}>Cancel Request</Button>
            : (
              <>
                <Button mode="contained" onPress={handleJoin}>Join this Home</Button>
                <Button mode="contained-tonal" onPress={() => navigation.navigate('PostRegister')}>Find another home</Button>
              </>
            )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default JoinHomeScreen;
