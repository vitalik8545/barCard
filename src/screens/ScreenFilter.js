import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {FILTERS} from '../FILTERS';
import {AppCheckBox} from '../components/AppCheckBox';
import {useDispatch, useSelector} from 'react-redux';
import {createUploadFilters} from '../store/actions/post';

export const ScreenFilter = ({navigation}) => {
  const filters = useSelector((state) => state.post.filters);
  const dispatch = useDispatch();

  const applyFilterHandler = () => {
    dispatch(createUploadFilters());
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filters}
        keyExtractor={(filter) => filter.id.toString()}
        renderItem={({item}) => {
          return (
            <AppCheckBox
              title={item.strCategory}
              selected={item.selected}
              id={item.id}
            />
          );
        }}
      />
      <TouchableOpacity style={styles.button} onPress={applyFilterHandler}>
        <Text style={styles.text}>APPLY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
});
