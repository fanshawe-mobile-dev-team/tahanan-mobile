import React, { useState } from 'react';
import {
  StyleSheet, Text, View, KeyboardAvoidingView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import colors from '../../../theme/colors';

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

function SearchHomeScreen() {
  const [homeSearch, setHomeSearch] = useState('');

  const handleSearch = async () => {
    const homeName = homeSearch;
    // TODO: handle search
  };

  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <View>
        <Text style={styles.heading}>Home Search</Text>
        <Text style={styles.subheading}>
          Enter the home name to search
        </Text>
        <TextInput
          style={styles.input}
          label="Home Name"
          placeholder="Enter home name"
          value={homeSearch}
          onChangeText={setHomeSearch}
        />

        <Button mode="contained" onPress={handleSearch}>Search</Button>
      </View>
    </KeyboardAvoidingView>
  );
}

export default SearchHomeScreen;
