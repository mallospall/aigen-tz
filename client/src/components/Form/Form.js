import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import {
  inputDate, inputID, inputName, sortRange, sortType,
} from '../../redux/actions/Actions';
import './Form.css';

const options = [
  {
    value: 'id',
    label: 'ID',
  },
  {
    value: 'date',
    label: 'Создан',
  },
];
const optionsRange = [
  {
    value: 'desc',
    label: 'По убыванию',
  },
  {
    value: 'asc',
    label: 'По возрастанию',
  },
];

function Form() {
  const { inputs } = useSelector((s) => s);
  const dispatch = useDispatch();

  const [dis, setDis] = useState(false);
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [currentSort, setCurrentSort] = useState('date');
  const [currentRange, setCurrentRange] = useState('desc');

  const getValue = () => (currentSort ? options.find((c) => c.value === currentSort) : '');
  const getValueRange = () => (currentRange ? optionsRange.find((c) => c.value === currentRange) : '');

  const onChangeSort = (newValue) => {
    setCurrentSort(newValue.value);
    dispatch(sortType(newValue.value));
  };

  const onChangeRange = (newValue) => {
    setCurrentRange(newValue.value);
    dispatch(sortRange(newValue.value));
  };

  useEffect(() => {
    if (inputs.id !== '') {
      setDis(true);
    } else { setDis(false); }
  }, [inputs.id]);

  useEffect(() => {
    if (dateStart && dateEnd) {
      const date = [];
      for (let i = dateStart; i <= dateEnd; i += 24 * 60 * 60 * 1000) {
        date.push(new Date(i).toISOString().slice(0, 10));
      }
      dispatch(inputDate(date));
    } else {
      dispatch(inputDate(null));
    }
  }, [dateStart, dateEnd]);

  return (
    <div className="Form">
      <div className="box">
        <div>
          <h3>ID документа</h3>
          <input value={inputs.id} onChange={(e) => dispatch(inputID(e.target.value))} />
          {!dis
            ? <div className="textID">Если заполнено поле ID документа, все остальные поля будут проигнорированы</div>
            : ''}
        </div>
        <div>
          <h3>Создан</h3>
          <div className="select-box">
            <input className="date" disabled={dis} type="Date" onChange={(e) => setDateStart(Date.parse(e.target.value))} />
            <input className="date" disabled={dis} type="Date" onChange={(e) => setDateEnd(Date.parse(e.target.value))} />
          </div>
        </div>
        <div>
          <h3>Название документа</h3>
          <input disabled={dis} onChange={(e) => dispatch(inputName(e.target.value))} />
        </div>
        <div>
          <h3>Сортировка</h3>
          <div className="select-box">
            <Select
              isDisabled={dis}
              value={getValue()}
              onChange={onChangeSort}
              options={options}
            />
            <Select
              isDisabled={dis}
              value={getValueRange()}
              onChange={onChangeRange}
              options={optionsRange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
