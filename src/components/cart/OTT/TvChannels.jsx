import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const TvChannels = ({title, selected, onSelect}) => {
  //   console.log(title);
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.channelItems, selected && styles.selected]}>
      <Text style={{color: 'black', fontSize: 25, fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TvChannels;

const styles = StyleSheet.create({
  channelItems: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.8,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#e3e8e8',
  },
});
