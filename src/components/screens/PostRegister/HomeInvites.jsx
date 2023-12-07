import React from 'react';
import {
  StyleSheet, TouchableOpacity, View,
} from 'react-native';
import {
  Avatar, Icon, Text,
} from 'react-native-paper';
import commonStyles from '../../../theme/commonStyles';
import colors from '../../../theme/colors';

const styles = StyleSheet.create({
  list: {
    marginBottom: 32,
  },
  homeInvite: {
    borderColor: colors.outline.main,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeInviteDetails: {
    flexGrow: 1,
    marginHorizontal: 16,
  },
  homeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const sampleData = [
  {
    id: 1,
    sender: {
      id: 'user-1',
      username: 'user1',
    },
    recepient: {
      id: 'user',
      username: 'You',
    },
    home: {
      id: 'home-1',
      name: 'Home 123',
    },
  },
  {
    id: 2,
    sender: {
      id: 'user-2',
      username: 'user2',
    },
    recepient: {
      id: 'user',
      username: 'You',
    },
    home: {
      id: 'home-2',
      name: 'Home 234',
    },
  },
];

function HomeInvites() {
  return (
    <View style={styles.list}>
      <Text style={commonStyles.displayHeading}>Home Invites</Text>
      {sampleData.map(({ id, home, sender }, index) => (
        <TouchableOpacity
          key={id}
          style={[
            styles.homeInvite,
            { marginBottom: index < sampleData.length - 1 ? 10 : 0 },
          ]}
        >
          <Avatar.Text label={home.name[0].toUpperCase()} />
          <View style={styles.homeInviteDetails}>
            <Text style={styles.homeName}>{home.name}</Text>
            <Text>
              Invited by
              {' '}
              {sender.username}
            </Text>
          </View>
          <Icon size={32} source="chevron-right" />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default HomeInvites;
