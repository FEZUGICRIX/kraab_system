export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setLocalStorage = (key, data) => {
  const existingData = getLocalStorage(key);

  const index = existingData.indexOf(data);
  if (index === -1) {
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  }
};

export const removeLocalStorageItemById = (key, id) => {
  const existingData = getLocalStorage(key);

  const newArray = existingData.filter((item) => item !== id);
  localStorage.setItem(key, JSON.stringify(newArray));
};
