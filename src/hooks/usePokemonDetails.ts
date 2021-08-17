import {useEffect, useState} from 'react';
import {pokemonApi} from '../api/api';
import {PokemonDetails} from '../interfaces/PokemonDetailsInterface';

export const usePokemonDetails = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<PokemonDetails>(
    {} as PokemonDetails,
  );
  const loadPokemonDetails = async () => {
    const resp = await pokemonApi.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setPokemonData(resp.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemonDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    pokemonData,
  };
};
