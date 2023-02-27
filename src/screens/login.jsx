import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [Username, setUsername] = useState('s');

  function goToHome() {
    if (!Username) return alert('please fill username');
    navigation.replace('MyTabs', {user: Username});
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text style={{fontSize: 100}}>❤️</Text>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '10%',
          flex: 0.7,
        }}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          maxLength={40}
          style={styles.input}
          placeholder="Email"
          autoComplete="email"
          onChange={setUsername}
          value={Username}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry={true}
          maxLength={40}
          style={styles.input}
          placeholder="Password"
          autoComplete="email"
        />
        <Text style={styles.forgotpass}>Forgot Password</Text>
        <TouchableOpacity
          onPress={goToHome}
          style={[styles.btn, {maxHeight: 60}]}>
          <Text style={[styles.btnText, {color: '#000'}]}>Login</Text>
        </TouchableOpacity>
        <Text style={[styles.forgotpass, {alignSelf: 'center'}]}>
          OR Connect with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#4a6cf5'}]}>
            <Text style={styles.btnText}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, {backgroundColor: '#f01b1b'}]}>
            <Text style={styles.btnText}>Google</Text>
          </TouchableOpacity>
        </View>
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
    paddingVertical: 18,
    borderRadius: 100,
    marginHorizontal: 5,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});

export default LoginScreen;
