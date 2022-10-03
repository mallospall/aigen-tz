import React, { useState } from 'react';
import './Doc.css';

function Doc({ doc }) {
  const [view, setView] = useState(false);

  const clickHandler = () => {
    setView(!view);
  };

  return (
    <>
      <button className="btn" onClick={clickHandler} type="button">
        <div>{doc.name}</div>
        {view ? <img src="https://cdn-icons-png.flaticon.com/512/5053/5053186.png" /> : <img src="https://cdn-icons-png.flaticon.com/512/134/134210.png" />}
      </button>
      {view ? (
        <div className="more">
          <p>Info: {doc.info}</p>
          <p>ID: {doc.id}</p>
          <p>{doc.createdAT}</p>
        </div>
      )
        : <></>}
    </>

  );
}

export default Doc;
