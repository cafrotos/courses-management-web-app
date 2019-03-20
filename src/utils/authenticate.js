import { SHIPPO_APP } from '../constants';

export const regexPassword = () => {
  return new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
}

export const getHeaders = (token, json) => {
  return {
    'Content-Type': json ? 'application/json' : 'application/x-www-form-urlencoded',
    'Authorization': token ? token : '',
    'xxx-app-name': SHIPPO_APP.name,
    'xxx-app-key': SHIPPO_APP.secret
  }
}

export const getBaseURl = () => {
  switch (process.env.NODE_ENV) {
    case 'local':
      return 'http://127.0.0.1:3000';
    case 'dev':
      return 'http://192.168.10.210:3000';
    case 'production':
      return '';
    default:
      return 'http://127.0.0.1:3000';
  }
}

export const parseFormDataEncode = (data) => {
  const formData = [];
  if (data) {
    for (const key in data) {
      if (typeof data[key] === 'object') {
        formData.push(encodeURIComponent(key) + '=' + encodeURIComponent(JSON.stringify(data[key])));
      } else {
        formData.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
      }
    }
  }
  return formData.join("&");
}

