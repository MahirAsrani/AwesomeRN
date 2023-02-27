import React from 'react';

import {SafeAreaView, Text} from 'react-native';

const ProfileScreen = ({route, navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
      }}>
      <Text style={{fontSize: 40}}> Profile Screen </Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
