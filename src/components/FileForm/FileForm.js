import './FileForm.css';

import React, { useState } from 'react';
// import axios from 'axios';

function FileForm() {

  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log(file.name);
    // const url = 'http://localhost:3000/uploadFile';
    // const formData = new FormData();
    // formData.append('file', file);
    // formData.append('fileName', file.name);
    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });

  }

  return (
    <form className='file-form' onSubmit={handleSubmit}>
      <input className='file-form-input' name="file-input" type='file' onChange={handleChange} />
      <button className='file-form-button' type="submit">Загрузить</button>
    </form>
  )
};

export default FileForm;
