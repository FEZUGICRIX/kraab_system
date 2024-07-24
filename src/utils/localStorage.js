export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setLocalStorage = (key, data) => {
  try {
    const existingData = getLocalStorage(key);
    const hasIndex = existingData.some((item) => item.id === data.id);
    if (!hasIndex) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.error('Ошибка при установке элемента в localStorage:', error);
  }
};

// export const setLocalStorage = (key, data) => {
// if (data.length === 0) {
//   setLocalStorage(key, data);
// }

// const existingData = getLocalStorage(key);
// const hasIndex = existingData.some((item) => item.id === data.id);
// if (!hasIndex) {
//   localStorage.setItem(key, JSON.stringify(data));
// }
// };

export const removeLocalStorageItemById = (key, data) => {
  const items = getLocalStorage(key);
  const updateItems = items.filter((item) => item.id != data.id);
  setLocalStorage(key, updateItems);
};
