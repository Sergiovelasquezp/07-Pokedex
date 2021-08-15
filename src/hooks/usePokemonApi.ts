import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/api';
import {
  Pokemon,
  PokemonAPIResults,
  Pokemons,
} from '../interfaces/IPokemonResponse';

export const usePokemonApi = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const loadPokemons = async () => {
    setIsLoading(true);
    const response = await pokemonApi.get<PokemonAPIResults>(
      nextPageUrl.current,
    );
    nextPageUrl.current = response.data.next;
    mapResponseToPokemonList(response.data.results);
  };

  const mapResponseToPokemonList = (list: Pokemons[]) => {
    const newPokemonList: Pokemon[] = list.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return {id, picture, name};
    });
    setPokemonList([...pokemonList, ...newPokemonList]);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {pokemonList, isLoading, loadPokemons};
};
