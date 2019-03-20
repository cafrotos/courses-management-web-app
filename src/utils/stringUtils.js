export const handleCopyText = (str) => {
  const regexStr = /^\s+|\s+$/g; //Remove space at begin and end of string
  return str.replace(regexStr, '')
}

export const handleCopyPhone = (str) => {
  const regexStr = /^\s+|\s+$|-/g; //Remove space at begin and end of string
  return str.replace(regexStr, "")
}

export const handleArrNote = (str) => {
  const description = str.split(/\r\n|\r|\n/g); //Parse str to array of note
  let arrDes = [];
  //Remove empty element in array note
  for (let ii = 0; ii < description.length; ii++) {
    if (description[ii]) {
      arrDes = [...arrDes, description[ii]];
    }
  }
  return arrDes
}

export const handleInputCurrency = (curr) => {
  // eslint-disable-next-line
  const regex = /\.|\,/g; // remove "." "," in string
  return curr.replace(regex, "");
}