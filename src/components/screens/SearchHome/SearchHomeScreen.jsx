import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, KeyboardAvoidingView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import colors from '../../../theme/colors';
import { fetchHome } from '../../../utils/api/homeApi';
import commonStyles from '../../../theme/commonStyles';

const styles = StyleSheet.create({
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerButton: {
    color: colors.primary.main,
    fontWeight: 'bold',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    marginBottom: 20,
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 24,
  },
  subheading: {
    marginBottom: 28,
  },
});

function SearchHomeScreen({ navigation }) {
  const [homeName, setHomeName] = useState('');
  const [error, setError] = useState();

  const handleSearch = async () => {
    setError(null);
    try {
      const home = await fetchHome(homeName);

      if (!home) {
        throw new Error('Home does not exist');
      }

      navigation.navigate('JoinHome', { home });
    } catch ({ message }) {
      setError(message);
    }
  };

  useEffect(() => {
    setError(null);
  }, [homeName]);

  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <View>
        <Text style={styles.heading}>Home Search</Text>
        <Text style={styles.subheading}>
          Enter the home name to search
        </Text>
        <View style={commonStyles.errorContainer}>
          {error && <Text style={commonStyles.formError}>{error}</Text>}
        </View>
        <TextInput
          style={styles.input}
          label="Home Name"
          placeholder="Enter home name"
          value={homeName}
          onChangeText={setHomeName}
        />

        <Button mode="contained" disabled={!homeName} onPress={handleSearch}>Search</Button>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SearchHomeScreen;
