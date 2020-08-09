import {
  CHANGE_STATUS_FILTER,
  CREATE_UPLOAD_FILTERS,
  LOAD_FILTERS,
  REMOVE_UPLOAD_FILTER,
  UPLOAD_CARDS,
} from '../types';

const initialState = {
  filters: [],
  uploadFilters: [],
  cards: [],
  loading: true,
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FILTERS:
      return {
        ...state,
        filters: action.filters,
        uploadFilters: action.filters,
        loading: false,
      };
    case CHANGE_STATUS_FILTER:
      const newFilters = state.filters.map((filter) => {
        if (action.id === filter.id) {
          filter.selected = !filter.selected;
        }
        return filter;
      });

      return {
        ...state,
        filters: newFilters,
      };
    case CREATE_UPLOAD_FILTERS:
      return {
        ...state,
        uploadFilters: state.filters,
        cards: [],
        filters: state.filters,
      };
    case UPLOAD_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.cards],
      };
    case REMOVE_UPLOAD_FILTER:
      return {
        ...state,
        uploadFilters: state.uploadFilters.filter(
          (filter) => filter.id !== action.id,
        ),
      };
    default:
      return state;
  }
};
