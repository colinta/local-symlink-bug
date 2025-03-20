import React, {useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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
    <FlatList
      data={numbers}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
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
