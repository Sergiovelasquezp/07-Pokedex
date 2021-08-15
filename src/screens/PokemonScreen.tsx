import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BackButton} from '../components/BackButton';
import {FadeInImage} from '../components/FadeInImage';
import {RootStackParams} from '../navigation/navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}
const windowHeight = Dimensions.get('window').height;
const pokeball = require('../assets/pokebola-blanca.png');

export const PokemonScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {pokemon, color} = route.params;
  const {name, id, picture} = pokemon;
  return (
    <View style={{...styles.container, backgroundColor: color}}>
      <BackButton />
      {/* Pokemon name */}
      <Text
        style={{
          ...styles.pokemonName,
          top: top + 5,
        }}>
        {`${name} | #${id}`}
      </Text>
      {/* pokebakk */}
      <Image source={pokeball} style={{...styles.pokeball}} />
      {/* pokemon image */}
      <FadeInImage
        uri={picture}
        style={{
          ...styles.pokemonImage,
          top: top + 45,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight * 0.4,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    zIndex: 900,
  },
  pokemonName: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    position: 'absolute',
    left: 70,
  },
  pokeball: {
    width: 350,
    height: 350,
    bottom: -40,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 350,
    height: 350,
    position: 'absolute',
  },
});
