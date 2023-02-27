import React from 'react';

import {SafeAreaView, Text} from 'react-native';

const SettingsScreen = ({route, navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
      }}>
      <Text style={{fontSize: 40}}> Settings Screen </Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
