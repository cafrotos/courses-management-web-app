const REG_EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
const REG_PASSWORD = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

function Validate(field, data) {
  let isValidate;
  if(!data || data.trim() === '') return false;
  switch (field) {
    case 'email':
      isValidate = data.match(REG_EMAIL) ? true : false;
      break;
    case 'password': 
      isValidate = data.match(REG_PASSWORD) ? true : false;
      break;
  }
  return isValidate;
}

export default Validate;