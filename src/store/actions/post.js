import {
  CHANGE_STATUS_FILTER,
  CREATE_UPLOAD_FILTERS,
  LOAD_FILTERS,
  REMOVE_UPLOAD_FILTER,
  UPLOAD_CARDS,
} from '../types';
import {useDispatch} from 'react-redux';
import {exp} from 'react-native-reanimated';

export const loadFilters = () => {
  return async (dispatch) => {
    const filters = await getFilters();

    dispatch({
      type: LOAD_FILTERS,
      filters,
    });
  };
};

export const uploadCards = (cocktail) => {
  return async (dispatch) => {
    const cards = await getCards(cocktail);

    dispatch({
      type: UPLOAD_CARDS,
      cards,
    });
  };
};

export const removeUploadFilter = ({id}) => {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_UPLOAD_FILTER,
      id,
    });
  };
};

export const changeStatusFilter = (id) => {
  return async (dispatch) => {
    dispatch({
      type: CHANGE_STATUS_FILTER,
      id,
    });
  };
};

export const createUploadFilters = () => {
  return async (dispatch) => {
    dispatch({
      type: CREATE_UPLOAD_FILTERS,
    });
  };
};

export const getCards = async (cocktail) => {
  const jsonData = (
    await get(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + cocktail,
    )
  ).drinks;
  console.log('request getCards');

  let drinks = [];

  for (let i = 0; i < jsonData.length; i++) {
    const drink = {
      id: jsonData[i].idDrink,
      strDrink: jsonData[i].strDrink,
      strDrinkThumb: jsonData[i].strDrinkThumb,
    };
    drinks.push(drink);
  }

  return drinks;
};

export const getFilters = async () => {
  const jsonData = (
    await get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  ).drinks;
  let drinks = [];

  console.log('request getFilters');

  for (let i = 0; i < jsonData.length; i++) {
    const drink = {
      id: (i + 1).toString(),
      strCategory: jsonData[i].strCategory,
      selected: true,
    };
    drinks.push(drink);
  }

  return drinks;
};

export const get = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  return await response.json();
};
