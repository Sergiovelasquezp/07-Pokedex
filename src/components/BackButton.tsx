import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface IBackbuttonProps {
  onPress?: () => void;
}

export const BackButton = ({onPress}: IBackbuttonProps) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity
      onPress={onPress || goBack}
      activeOpacity={0.8}
      style={{
        ...styles.backButton,
        top: top + 10,
      }}>
      <Icon name="arrow-back-outline" color="white" size={35} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    left: 20,
  },
});
