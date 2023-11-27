import CreateHomeScreen from './CreateHome/CreateHomeScreen';
import DashboardScreen from './Dashboard/DashboardScreen';
import JoinHomeScreen from './JoinHome/JoinHomeScreen';
import LoginScreen from './Login/LoginScreen';
import PostRegisterScreen from './PostRegister/PostRegisterScreen';
import ProfileScreen from './Profile/ProfileScreen';
import RegisterScreen from './Register/RegisterScreen';
import SearchHomeScreen from './SearchHome/SearchHomeScreen';
import TaskListScreen from './TaskList/TaskListScreen';

export default [
  { name: 'Login', component: LoginScreen, options: { headerShown: false } },
  { name: 'Register', component: RegisterScreen },
  { name: 'PostRegister', component: PostRegisterScreen, options: { headerShown: false } },
  { name: 'CreateHome', component: CreateHomeScreen },
  { name: 'SearchHome', component: SearchHomeScreen },
  { name: 'JoinHome', component: JoinHomeScreen },
  { name: 'Dashboard', component: DashboardScreen, options: { headerShown: false } },
  { name: 'TaskList', component: TaskListScreen },
  { name: 'Profile', component: ProfileScreen },
];
