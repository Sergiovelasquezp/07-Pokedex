import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Pokemon} from '../interfaces/IPokemonResponse';
import HomeScreen from '../screens/HomeScreen';
import {PokemonScreen} from '../screens/PokemonScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {pokemon: Pokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();
const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
