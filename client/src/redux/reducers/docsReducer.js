/* eslint-disable default-param-last */

import {
  SET_DOCS,
} from '../types/types';

export default (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_DOCS:
      return payload.sort((a, b) => (b.createdAT > a.createdAT ? 1 : -1));

    default:
      return state;
  }
};
