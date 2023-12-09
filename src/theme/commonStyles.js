import { StyleSheet } from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },
  screenContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    flex: 1,
  },
  displayHeading: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  displaySubheading: {
    marginBottom: 28,
  },
  commonInput: {
    marginBottom: 20,
  },
  greyButton: {
    buttonColor: '#777680',
    backgroundColor: '#777680',
    marginVertical: 12,
  },
  buttonContainer: {
    marginVertical: 26,
  },
  commonTitle: {
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
    marginLeft: 16,
    fontSize: 16,
  },
  commonSubTitle: {
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 16,
    marginLeft: 16,
  },
  dashbAvatar: {
    width: 50,
    height: 50,
    backgroundColor: '#a786df',
    borderRadius: 100,
    marginVertical: 4,
  },
  commonSurface: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#B1B3FF',
  },
  taskListItem: {
    backgroundColor: '#D4D4FF',
    borderRadius: 16,
    marginVertical: 4,
  },
  dashbDate: {
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    fontSize: 22,
    color: colors.primary.main,
  },
  errorContainer: {
    minHeight: 20,
    marginBottom: 10,
  },
  formError: {
    color: colors.error.main,
  },
});

export default commonStyles;
