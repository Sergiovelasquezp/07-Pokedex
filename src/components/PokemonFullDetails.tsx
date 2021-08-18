import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonDetails} from '../interfaces/PokemonDetailsInterface';
import {Badges} from './Badges';
import {PokemonSprites} from './Sprites';

interface Props {
  pokemonDetails: PokemonDetails;
  color?: string;
}

export const PokemonFullDetails = ({pokemonDetails, color}: Props) => {
  const {top} = useSafeAreaInsets();
  const {name, types, abilities, sprites, moves} = pokemonDetails;
  // console.log(types);
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
        ...styles.container,
      }}>
      <View style={{...styles.details, marginTop: top + 440}}>
        <Badges title="types" items={types} color={color} />
        <PokemonSprites title="sprites" sprites={sprites} />
        <Badges title="abilities" items={abilities} color={color} />
        <Badges title="moves" items={moves} color={color} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  details: {
    marginHorizontal: 25,
  },
});
