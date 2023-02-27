import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './Profile';
const Tab = createBottomTabNavigator();

const HomeScreen = ({user, route, navigation}) => {
  function logout() {
    navigation.replace('Login');
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '10%',
      }}>
      <Text style={{fontSize: 40}}> Home Screen </Text>
      <Text style={{fontSize: 30}}> Welcome {route?.params?.user} </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: '10%',
        }}>
        <TouchableOpacity
          onPress={logout}
          style={[styles.btn, {backgroundColor: '#4a6cf5'}]}>
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    width: '100%',
    borderColor: 'red',
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: 'red',
    marginTop: '12%',
  },
  forgotpass: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    color: 'grey',
    marginVertical: '4%',
    alignSelf: 'flex-end',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 100,
    maxWidth: 100,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default HomeScreen;
