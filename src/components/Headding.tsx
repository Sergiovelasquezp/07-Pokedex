import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface IHeaddingProps {
  title: string;
}
export const Headding = ({title}: IHeaddingProps) => {
  const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      paddingBottom: 25,
    },
  });
  return (
    <>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};
