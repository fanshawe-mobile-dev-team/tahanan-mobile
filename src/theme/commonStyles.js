import { StyleSheet } from 'react-native';
import colors from './colors';

const commonStyles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },
  screenContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 24,
    flex: 1,
  },
  displayHeading: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20,
  },
  displayHeading2: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 20,
  },
  displaySubheading: {
    marginBottom: 28,
  },
  commonInput: {
    marginBottom: 20,
  },
  greyButton: {
    backgroundColor: '#777680',
    marginVertical: 12,
  },
  commonTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 16,
    fontSize: 16,
  },
  commonSubTitle: {
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
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#B1B3FF',
    flexDirection: 'row',
    alignItems: 'center',
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
  dashbDate2: {
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
    fontSize: 22,
    color: colors.primary.main,
    marginHorizontal: 16,
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
