import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {
  acceptHomeRequest,
  createHome, fetchHome, fetchHomeJoinRequests, sendHomeRequest, updateHome,
} from '../../../utils/api/homeApi';
import commonStyles from '../../../theme/commonStyles';

function ApiTestScreen() {
  const testApi = async () => {
    // ownerId, name, addressLine1, addressLine2, city, state, postalCode, description

    // const input = {
    //   ownerId: '1',
    //   name: 'home1',
    //   addressLine1: 'asd',
    //   addressLine2: 'dsa',
    //   city: '1dsa',
    //   state: 'canada',
    //   postalCode: '123 321',
    //   description: 'asd',
    // };

    // const res = createHome(input);

    // console.log(res);

    // const res = await fetchHome('ejt4W18HpPI2EKeMUTVX');

    // const updateInput = {
    //   id: 'ejt4W18HpPI2EKeMUTVX',
    //   name: 'home1',
    //   addressLine1: 'updated',
    //   addressLine2: 'updated',
    //   city: 'updated',
    //   state: 'updated',
    //   postalCode: 'updated',
    //   description: 'updated',
    // };

    // const res = await updateHome(updateInput);
    // console.log('API TEST RESULT', res);

    // const input = {
    //   userId: 'testUser2',
    //   homeId: 'home1',
    //   ownerId: 'testUser',
    // };

    // const res = await sendHomeRequest(input);

    // await acceptHomeRequest('home1-testUser2');

    const res = await fetchHomeJoinRequests('home1');
    console.log('TEST RES', res);
  };

  return (
    <View style={commonStyles.screenContainer}>
      <Text>API Test Screen</Text>
      <Button mode="contained" onPress={testApi}>Test API</Button>
    </View>
  );
}

export default ApiTestScreen;
