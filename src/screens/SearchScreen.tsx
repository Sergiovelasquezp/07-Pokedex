import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Headding} from '../components/Headding';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {useSearchPokeemon} from '../hooks/useSearchPokemon';
import {Pokemon} from '../interfaces/IPokemonResponse';

export const SearchScreen = () => {
  const {isFetching, pokemonList} = useSearchPokeemon();
  const [value, setValue] = useState('Search Value');
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    if (value.length === 0) {
      return setFilteredPokemon([]);
    }
    if (isNaN(Number(value))) {
      setFilteredPokemon(
        pokemonList.filter(p =>
          p.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      const searchById = pokemonList.find(p => p.id === value);
      setFilteredPokemon(searchById ? [searchById] : []);
    }
  }, [pokemonList, value]);

  if (isFetching) {
    return (
      <View style={{...styles.indicator}}>
        <ActivityIndicator color="grey" size={50} />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={{...styles.container}}>
      <Headding title="Search" />
      <SearchInput onDebounce={setValue} />
      <View style={{...styles.results}}>
        <FlatList
          data={filteredPokemon}
          keyExtractor={(pokemon: Pokemon) => pokemon.id}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // Header
          ListHeaderComponent={<Headding title={value.toUpperCase()} />}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  results: {
    marginTop: 20,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
