import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Type} from '../interfaces/PokemonDetailsInterface';

interface Props {
  title?: string;
  items: Type[];
  color?: string;
}
export const Badges = ({title, items, color}: Props) => {
  return (
    <View>
      <Text style={{...styles.title}}>{title}</Text>
      <View style={{...styles.badges}}>
        {items.map(({type}) => (
          <Text
            style={{
              ...styles.types,
              backgroundColor: color || '',
            }}>
            {type.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  badges: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 10,
  },
  types: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginRight: 10,
  },
});
