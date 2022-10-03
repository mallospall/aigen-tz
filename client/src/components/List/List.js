/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Doc from '../Doc/Doc';
import './List.css';
import { getDocs_THUNK } from '../../redux/actions/Actions';

function List() {
  const { docs, inputs } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDocs_THUNK());
  }, []);

  const sortDocs = (a, b) => {
    if (inputs.typeSort === 'date' && inputs.typeRange === 'desc') {
      if (b.createdAT > a.createdAT) {
        return 1;
      } return -1;
    }
    if (inputs.typeSort === 'date' && inputs.typeRange === 'asc') {
      if (b.createdAT < a.createdAT) {
        return 1;
      } return -1;
    }
    if (inputs.typeSort === 'id' && inputs.typeRange === 'desc') {
      if (b.id > a.id) {
        return 1;
      } return -1;
    }
    if (inputs.typeSort === 'id' && inputs.typeRange === 'asc') {
      if (b.id < a.id) {
        return 1;
      } return -1;
    }
    return true;
  };

  return (
    <div className="List">
      <div className="docs">
        {inputs?.id ? (docs.filter((el) => (
          JSON.stringify(el.id) === (inputs?.id || JSON.stringify(el.id))))
          .map((el) => (
            <Doc doc={el} key={el.id} />
          )))
          : (docs.filter((el) => (
            el.name.toLowerCase().includes(inputs?.name?.toLowerCase() || el.name?.toLowerCase()))))
            .filter((el) => (inputs?.date || el.createdAT)?.includes(el.createdAT))
            .sort(sortDocs)
            .map((el) => (
              <Doc doc={el} key={el.id} />
            ))}
      </div>
    </div>
  );
}

export default List;
