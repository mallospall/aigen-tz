import React, { useState } from 'react';
import './Doc.css';

function Doc({ info }) {
  const [view, setView] = useState(false);

  const clickHandler = () => {
    setView(!view);
  };

  return (
    <>
      <button className="doc" onClick={clickHandler} type="button">
        {info.name}
      </button>
      {view ? (
        <div className="more">
          {info.title}
        </div>
      )
        : <></>}
    </>

  );
}

export default Doc;
