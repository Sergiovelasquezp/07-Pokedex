import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Type, Ability, Move} from '../interfaces/PokemonDetailsInterface';

interface Props {
  title?: string;
  items: Type[] | Ability[] | Move[];
  color?: string;
}
export const Badges = ({title, items, color}: Props) => {
  const [itemData, setItemData] = useState<any>('');
  const mapItemData = () => {
    items.forEach(item => {
      if (item.hasOwnProperty('ability')) {
        setItemData('ability');
      }
      if (item.hasOwnProperty('move')) {
        setItemData('move');
      }
      if (item.hasOwnProperty('type')) {
        setItemData('type');
      }
    });
    // console.log('itemIndex => ', itemIndex[0]);
  };

  useEffect(() => {
    mapItemData();
    // console.log('itemData => ', itemData);
  }, [items, itemData]);

  return (
    <View style={{...styles.badgesContainer}}>
      <Text style={{...styles.title}}>{title}</Text>
      <View style={{...styles.badges}}>
        {items.map((item: any) => (
          <Text
            style={{
              ...styles.types,
              backgroundColor: color || '',
            }}>
            {itemData && item[itemData].name}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  badges: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 10,
  },
  types: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginVertical: 5,
    marginRight: 10,
  },
});
