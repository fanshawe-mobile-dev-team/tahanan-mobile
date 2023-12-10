import { DefaultTheme } from '@react-navigation/native';
import colors from './colors';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary.main,
    background: colors.background.light,
    // primary: 'rgb(255, 45, 85)',
  },
};

export default defaultTheme;
