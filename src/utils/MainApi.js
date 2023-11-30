class MainApi {
  constructor(){
    this._url = 'in_future';
    this._headers = {
      'Content-Type': 'application/json'
    }
  };

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  };

  comparePosition(product) {
    console.log('compare');
    // return fetch(`${this._url}/users/me`, {
    //   credentials: 'include',
    // })
    //   .then(res => this._checkResponse(res))
  };

  notComparePosition(product) {
    console.log('notCompare');
    // return fetch(`${this._url}/users/me`, {
    //   credentials: 'include',
    // })
    //   .then(res => this._checkResponse(res))
  };

  postponePosition(product) {
    console.log('postponePosition');
    // return fetch(`${this._url}/users/me`, {
    //   credentials: 'include',
    // })
    //   .then(res => this._checkResponse(res))
  };

  // SendCsv(file) {

  //   const formData = new FormData();

  //   formData.append('file', file);
  //   formData.append('fileName', file.name);

  //   return fetch(`${this._url}/signup`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //     body: formData
  //   })
  //   .then(res => this._checkResponse(res))
  // };

}

export const mainApi = new MainApi();
