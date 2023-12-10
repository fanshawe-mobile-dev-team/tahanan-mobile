import ApiTestScreen from './ApiTestScreen/ApiTestScreen';
import AssignTaskScreen from './AssignTask/AssignTaskScreen';
import CreateHomeScreen from './CreateHome/CreateHomeScreen';
import CreateTaskScreen from './CreateTask/CreateTaskScreen';
import HomeProfileScreen from './HomeProfile/HomeProfileScreen';
import JoinHomeScreen from './JoinHome/JoinHomeScreen';
import LoginScreen from './Login/LoginScreen';
import MainScreen from './Main/MainScreen';
import PostRegisterScreen from './PostRegister/PostRegisterScreen';
import ProfileScreen from './Profile/ProfileScreen';
import RegisterScreen from './Register/RegisterScreen';
import SearchHomeScreen from './SearchHome/SearchHomeScreen';
import TaskScreen from './Task/TaskScreen';
import TaskListScreen from './TaskList/TaskListScreen';

export default [
  { name: 'Login', component: LoginScreen, options: { headerShown: false } },
  { name: 'Register', component: RegisterScreen },
  { name: 'PostRegister', component: PostRegisterScreen, options: { headerShown: false } },
  { name: 'CreateHome', component: CreateHomeScreen, options: { title: 'Create a New Home' } },
  { name: 'SearchHome', component: SearchHomeScreen },
  { name: 'JoinHome', component: JoinHomeScreen, options: { headerShown: false } },
  { name: 'Main', component: MainScreen, options: { headerShown: false } },
  { name: 'TaskList', component: TaskListScreen },
  { name: 'Task', component: TaskScreen, options: ({ route }) => ({ title: route.params.task.name }) },
  { name: 'CreateTask', component: CreateTaskScreen },
  { name: 'AssignTask', component: AssignTaskScreen },
  { name: 'Profile', component: ProfileScreen },
  { name: 'APITest', component: ApiTestScreen },
  { name: 'HomeProfile', component: HomeProfileScreen, options: { title: 'Home Profile' } },
];
