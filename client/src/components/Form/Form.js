import React from 'react';
import './Form.css';

function Form() {
  return (
    <div className="Form">
      <div className="box">
        <div>
          <h3>ID документа</h3>
          <input />
        </div>
        <div>
          <h3>Создан</h3>
          <input type="Date" />
          <input type="Date" />
        </div>
        <div>
          <h3>Название документа</h3>
          <input />
        </div>
        <div>
          <h3>Сортировка</h3>
          <input />
          <input />
        </div>
      </div>
    </div>
  );
}

export default Form;
