export const getLocalStorage = (key) => {
  if (typeof window === 'undefined') return [];

  try {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
  } catch (error) {
    console.error('Ошибка при получении данных из Local Storage:', error);
    return [];
  }
};

export const setLocalStorage = (key, data) => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Ошибка при сохранении данных в Local Storage:', error);
  }
};

export const removeLocalStorageItemById = (key, item) => {
  if (typeof window === 'undefined') return;

  try {
    const items = getLocalStorage(key);
    const filteredItems = items.filter(
      (i) => !(i.id === item.id && (item.packages ? i.packages === item.packages : true))
    );
    setLocalStorage(key, filteredItems);
  } catch (error) {
    console.error('Ошибка при удалении данных из Local Storage:', error);
  }
};
