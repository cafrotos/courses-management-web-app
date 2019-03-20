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
