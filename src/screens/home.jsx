import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Video from 'react-native-video';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './Profile';
import axios from 'axios';
const Tab = createBottomTabNavigator();
import dummyDataJSON from '../dummy.json';
import {fetchAllStreams} from '../redux/actions/tvActions';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({user, route, navigation}) => {
  function logout() {
    navigation.replace('Login');
  }

  const disaptch = useDispatch();
  const liveTv = useSelector(({liveTv}) => liveTv);

  async function getTvStreamsData() {
    const streams = await new Promise((res, rej) =>
      setTimeout(() => res(dummyDataJSON), 3000),
    );

    disaptch(fetchAllStreams(streams.data));
  }

  useEffect(() => {
    getTvStreamsData();
  }, []);

  if (liveTv.loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#4d4d4d',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <ActivityIndicator size="large" color="#fff" />
        <Text style={{color: '#fff', fontSize: 22, padding: 8}}>
          Loading...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
      }}>
      <View style={{flex: 0.3, backgroundColor: 'black'}}>
        <Video
          source={{
            uri: 'http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8',
          }}
          onError={e => console.log('error on vid', e)}
          style={styles.backgroundVideo}
          controls={true}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flex: 0.7,
        }}>
        <FlatList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
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
