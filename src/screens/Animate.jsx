import React, {useEffect, useRef, useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Animated,
  View,
  Easing,
} from 'react-native';

export default ({navigation}) => {
  const spinValue = new Animated.Value(0);
  const opacityValue = new Animated.Value(0);
  const fontsizeValue = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        {
          iterations: 6,
        },
      ).start(),

      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 1000 * 3,
        useNativeDriver: true,
      }).start(),

      Animated.timing(fontsizeValue, {
        toValue: 1,
        duration: 1000 * 3,
        useNativeDriver: true,
      }).start(),
    ]);
  }, []);

  const spinDeg = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#eee',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.Text
        style={[
          styles.Text,
          {
            opacity: opacityValue,
            transform: [
              {rotate: spinDeg},
              {
                scale: fontsizeValue,
              },
            ],
          },
        ]}>
        Task1
      </Animated.Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: 'red',
    fontWeight: '500',
    fontSize: 58,
    textTransform: 'uppercase',
  },
});
