/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDebouncedValue} from '../hooks/useDebouncedValue';

interface Props {
  onDebounce: (value: string) => void;
}

export const SearchInput = ({onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');
  const {debouncedValue} = useDebouncedValue(textValue);
  useEffect(() => {
    onDebounce(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <View style={{...styles.container}}>
      <View style={{...styles.inputContainer}}>
        <TextInput
          style={{
            ...styles.textInput,
            top: Platform.OS === 'android' ? 2 : 0,
          }}
          placeholder="Search"
          autoCorrect={false}
          autoCompleteType="off"
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" size={30} color="grey" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  inputContainer: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 20,
  },
});
