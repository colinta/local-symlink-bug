import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlashList} from '@shopify/flash-list';

const RandomList = () => {
  // Generate 100 random numbers and memoize them
  const numbers = useMemo(
    () =>
      Array(100)
        .fill(0)
        .map((_, index) => ({
          id: index,
          number: Math.floor(1 + Math.random() * 100),
        })),
    [],
  );

  // Render each item in the list
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text style={styles.text}>
        Number {item.id}: {item.number}
      </Text>
    </View>
  );

  return (
    <FlashList
      data={numbers}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      estimatedItemSize={50} // Important for FlashList performance
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  text: {
    fontSize: 16,
  },
});

export default RandomList;
