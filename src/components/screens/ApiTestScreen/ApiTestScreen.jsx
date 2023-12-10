import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import {
  fetchHomeRequests,
} from '../../../utils/api/homeApi';
import commonStyles from '../../../theme/commonStyles';
import {
  createTask, deleteTask, fetchHomeTasks, fetchTask, fetchUserTasks, updateTask,
} from '../../../utils/api/taskApi';

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

    // const res = await fetchHomeRequests('home1');

    // const input = {
    //   creatorId: 'testUser',
    //   homeId: 'home1',
    //   name: 'Sweep floor twice 2',
    //   description: 'Sweep floor of the whole house',
    //   assignedUser: 'testUser2',
    //   dueDate: '2022-12-12',
    // };

    // const res = await createTask(input);

    // const res = await fetchTask('0COX8HmUCfyeD9ezI8tj');

    // const input = {
    //   taskId: '0COX8HmUCfyeD9ezI8tj',
    //   name: 'Wipe windows',
    //   description: 'Wipe all the windows',
    //   assignedUser: 'testUser2',
    //   isCompleted: true,
    // };

    // const res = await updateTask(input);

    // await deleteTask('0COX8HmUCfyeD9ezI8tj');

    // const query = {
    //   userId: 'testUser',
    //   // date: '2022-12-9',
    // };
    // const res = await fetchUserTasks(query);

    // const query = {
    //   homeId: 'home1',
    //   date: '2022-12-9',
    // };

    // const res = await fetchHomeTasks(query);

    // console.log('TEST RES', res);
    // console.log('TEST RES', res.length);
  };

  return (
    <View style={commonStyles.screenContainer}>
      <Text>API Test Screen</Text>
      <Button mode="contained" onPress={testApi}>Test API</Button>
    </View>
  );
}

export default ApiTestScreen;
