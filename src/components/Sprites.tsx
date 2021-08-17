import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Sprites} from '../interfaces/PokemonDetailsInterface';
import {theme} from '../theme/appTheme';
import {FadeInImage} from './FadeInImage';

interface Props {
  sprites: Sprites;
  title: string;
}

interface ISprites {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export const PokemonSprites = ({sprites, title}: Props) => {
  const imageSprites: ISprites = {
    back_default: sprites.back_default,
    back_shiny: sprites.back_shiny,
    front_default: sprites.front_default,
    front_shiny: sprites.front_shiny,
  };
  return (
    <View style={{...styles.container, ...theme.elementsPaddingTop}}>
      <Text style={theme.titles}>{title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Object.keys(imageSprites).map((sprite: string) => (
          <FadeInImage uri={imageSprites[sprite]} style={styles.sprites} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  sprites: {
    width: 100,
    height: 100,
  },
});
