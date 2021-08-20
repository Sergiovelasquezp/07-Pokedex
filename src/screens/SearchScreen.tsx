import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Headding} from '../components/Headding';
import {SearchInput} from '../components/SearchInput';

export const SearchScreen = () => {
  return (
    <View style={{...styles.container}}>
      <Headding title="Search" />
      <SearchInput />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
