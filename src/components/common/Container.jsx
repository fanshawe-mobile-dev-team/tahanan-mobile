import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import commonStyles from '../../theme/commonStyles';

function Container({ children }) {
  return (
    <KeyboardAvoidingView style={commonStyles.keybardAvoiding}>
      <ScrollView>
        <View style={commonStyles.screenContainer}>
          {children}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Container;
