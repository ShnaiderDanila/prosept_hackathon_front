import React from 'react';

import './FileForm.css';

function FileForm() {

  return (
    <form className='file-form'>
      <input className='file-form-input' type='file' placeholder='Найти'></input>
      <button className='file-form-button' type='button'>Загрузить</button>
    </form>
  )
};

export default FileForm;
