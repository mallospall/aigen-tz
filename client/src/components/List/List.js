import React from 'react';
import Doc from '../Doc/Doc';
import './List.css';

const arr = [{
  name: 'saddasd',
  title: '21425235sad',
},
{
  name: 'saddasd',
  title: '21425235sad',
}, {
  name: 'saddasd',
  title: '21425235sad',
}];

function List() {
  return (
    <div className="List">
      <div className="docs">
        {arr.map((el) => (
          <Doc info={el} />
        ))}
      </div>
    </div>
  );
}

export default List;
