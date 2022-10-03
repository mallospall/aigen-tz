/* eslint-disable camelcase */
import {
  SET_DOCS, SET_INPUT_DATE, SET_INPUT_ID, SET_INPUT_NAME, SET_SORT_RANGE, SET_SORT_TYPE,
} from '../types/types';

export const getDocs = (data) => ({ type: SET_DOCS, payload: data });

export const inputID = (data) => ({ type: SET_INPUT_ID, payload: data });

export const inputName = (data) => ({ type: SET_INPUT_NAME, payload: data });

export const inputDate = (data) => ({ type: SET_INPUT_DATE, payload: data });

export const sortType = (data) => ({ type: SET_SORT_TYPE, payload: data });

export const sortRange = (data) => ({ type: SET_SORT_RANGE, payload: data });

export const getDocs_THUNK = () => (dispatch) => {
  fetch('https://my-json-server.typicode.com/mallospall/aigen-tz/docs')
    .then((res) => res.json())
    .then((data) => dispatch(getDocs(data)));
};
