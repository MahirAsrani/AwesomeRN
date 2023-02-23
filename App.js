import React from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fefefe',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <Text style={{fontSize: 100}}>❤️</Text>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '10%',
          flex: 0.6,
        }}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          maxLength={40}
          style={styles.input}
          placeholder="Email"
          autoComplete="email"
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
        <Button color="red" title="Login" onPress={() => alert('Hi')} />
        <Text style={[styles.forgotpass, {alignSelf: 'center'}]}>
          OR Connect with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Button color="blue" title="Facebook" />
          <Button color="black" title="Google" />
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
});

export default App;
