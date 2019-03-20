export const clearLocalStorage = () => {
  localStorage.clear();
}

export const setItem = (info) => {
  Object.keys(info).forEach(key => {
    localStorage.setItem(key, info[key])
  })
}

export const getItem = (key) => {
  return localStorage.getItem(key)
}
