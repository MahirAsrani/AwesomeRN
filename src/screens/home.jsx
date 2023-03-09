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
import {
  fetchAllStreams,
  setStream,
  setStreamLoading,
} from '../redux/actions/tvActions';
import {useDispatch, useSelector} from 'react-redux';
import TvChannels from '../components/cart/OTT/TvChannels';

const HomeScreen = ({user, route, navigation}) => {
  const disaptch = useDispatch();
  const liveTv = useSelector(({liveTv}) => liveTv);

  async function getTvStreamsData() {
    const streams = await new Promise((res, rej) =>
      setTimeout(() => res(dummyDataJSON), 3000),
    );

    disaptch(fetchAllStreams(streams.data.results));
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
      {liveTv.selectedStreamId && (
        <View
          style={{
            flex: 0.3,
            backgroundColor: 'black',
            position: 'relative',
          }}>
          {liveTv.videoStreamLoad && (
            <ActivityIndicator
              size={'large'}
              style={{
                position: 'absolute',
                zIndex: 1,
                width: '100%',
                height: '100%',
              }}
            />
          )}
          <Video
            source={{
              uri: liveTv.data.find(
                ({meta}) => meta.id === liveTv.selectedStreamId,
              )?.detail?.playUrl,
            }}
            onLoadStart={() => disaptch(setStreamLoading(true))}
            onLoad={() => disaptch(setStreamLoading(false))}
            onError={() => disaptch(setStreamLoading(false))}
            style={styles.backgroundVideo}
            controls={true}
            resizeMode="contain"
          />
        </View>
      )}
      <View style={[liveTv.selectedStreamId ? {flex: 0.7} : {flex: 1}]}>
        <FlatList
          data={liveTv.data}
          renderItem={({item}) => (
            <TvChannels
              title={item.meta.title}
              selected={item.meta.id === liveTv.selectedStreamId}
              onSelect={() => disaptch(setStream(item.meta.id))}
            />
          )}
          keyExtractor={item => item.meta.id}
        />
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
