import {StyleSheet} from 'react-native';

export const theme = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  globalAllignment: {
    alignItems: 'center',
  },
  pokebolaBG: {
    position: 'absolute',
    width: 300,
    height: 300,
    top: -100,
    right: -100,
    opacity: 0.2,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  titles: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  elementsPaddingTop: {
    paddingTop: 20,
  },
});
