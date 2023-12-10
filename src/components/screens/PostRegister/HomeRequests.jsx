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
  },
  homeRequest: {
    borderColor: colors.outline.main,
    borderWidth: 1,
    borderRadius: 12,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  homeRequestDetails: {
    flexGrow: 1,
    marginHorizontal: 16,
  },
  homeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  senderText: {},
});

function HomeRequests({ homeRequests }) {
  const handleSelect = () => {
    console.log('HOME REQUEST SELECTED');
  };

  return (
    <View style={styles.list}>
      <Text style={commonStyles.displayHeading}>Home Requests</Text>
      {homeRequests.map((request) => {
        const { homeId, ownerId } = request;
        return (
          <TouchableOpacity
            key={homeId}
            style={[
              styles.homeRequest,
              {
                marginBottom: 10,
              },
            ]}
            onPress={() => handleSelect(request)}
          >
            <Avatar.Text label={homeId[0].toUpperCase()} />
            <View style={styles.homeRequestDetails}>
              <Text style={styles.homeName}>{homeId}</Text>
              <Text>{ownerId}</Text>
            </View>
            <Icon size={32} source="chevron-right" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default HomeRequests;
