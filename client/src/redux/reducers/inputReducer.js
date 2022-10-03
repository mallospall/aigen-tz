/* eslint-disable default-param-last */

import {
  SET_INPUT_DATE,
  SET_INPUT_ID, SET_INPUT_NAME, SET_SORT_RANGE, SET_SORT_TYPE,
} from '../types/types';

export default (state = { id: '' }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_INPUT_ID:
      return {
        ...state,
        id: payload,
      };

    case SET_INPUT_NAME:
      return {
        ...state,
        name: payload,
      };

    case SET_INPUT_DATE:
      return {
        ...state,
        date: payload,
      };

    case SET_SORT_TYPE:
      return {
        ...state,
        typeSort: payload,
      };

    case SET_SORT_RANGE:
      return {
        ...state,
        typeRange: payload,
      };

    default:
      return state;
  }
};
