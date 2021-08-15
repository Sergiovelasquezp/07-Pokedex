import React from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {Headding} from '../components/Headding';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonApi} from '../hooks/usePokemonApi';
import {Pokemon} from '../interfaces/IPokemonResponse';
import {theme} from '../theme/appTheme';

const HomeScreen = () => {
  const {pokemonList, loadPokemons} = usePokemonApi();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={theme.pokebolaBG}
      />

      <View style={theme.globalAllignment}>
        <FlatList
          data={pokemonList}
          keyExtractor={(pokemon: Pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={<Headding title="Pokedex App" />}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          // infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};

export default HomeScreen;
