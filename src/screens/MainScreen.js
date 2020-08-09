import React, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Card} from '../components/Card';
import {DATA} from '../DATA';
import {useDispatch, useSelector} from 'react-redux';
import {
  loadFilters,
  removeUploadFilter,
  uploadCards,
} from '../store/actions/post';
import {combineReducers} from 'redux';

export const MainScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [cocktail, setCocktail] = useState(null);
  let onEndReachedCalledDuringMomentum = true;
  const loading = useSelector((state) => state.post.loading);
  const uploadFilters = useSelector((state) => state.post.uploadFilters);
  const cards = useSelector((state) => state.post.cards);

  useEffect(() => {
    console.log('load filters');
    dispatch(loadFilters());
  }, [dispatch]);

  useEffect(() => {
    if (uploadFilters.length > 0) {
      return loadNewCardsHandler();
    }
  }, [dispatch, loadNewCardsHandler, uploadFilters.length]);

  useEffect(() => {
    if (cocktail !== null) {
      console.log('upload data');
      dispatch(uploadCards(cocktail));
    }
  }, [cocktail, dispatch]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size={50} color="black" />
      </View>
    );
  }

  const loadNewCardsHandler = () => {
    console.log('cnt element =' + uploadFilters.length);
    console.log('card is ' + cards);
    if (uploadFilters.length === 0) {
      setCocktail(null);
      return;
    }
    setCocktail(uploadFilters[0].strCategory);
    dispatch(removeUploadFilter(uploadFilters[0]));
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={cards}
        onEndReached={() => {
          console.log('action onEndReached');

          if (!onEndReachedCalledDuringMomentum) {
            loadNewCardsHandler();
            onEndReachedCalledDuringMomentum = true;
          }
        }}
        onEndReachedThreshold={0.5}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
        keyExtractor={(card) => {
          return card.id;
        }}
        renderItem={({item}) => {
          return (
            <View>
              <Card img={item.strDrinkThumb} title={item.strDrink} />
            </View>
          );
        }}
      />
    </View>
  );
};

MainScreen.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'Drinks',
    headerRight: () => (
      <Icon
        name="filter"
        size={30}
        color="black"
        style={{marginRight: 10}}
        onPress={() => {
          navigation.navigate('Filters');
        }}
      />
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  list: {},
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
