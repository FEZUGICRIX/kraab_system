import { createContext, useState } from 'react';
import {
  getLocalStorage,
  removeLocalStorageItemById,
  setLocalStorage,
} from '../utils/localStorage';

const BasketContext = createContext({
  amount: 0,
  basketItems: [],
  setLocalStorageItems: null,
  removeLocalStorageItem: null,
});

export const BasketContextProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(
    getLocalStorage('basket') || []
  );

  const setLocalStorageItems = ({ id, packages }) => {
    const localStorateItems = getLocalStorage('basket');
    const hasIndex = localStorateItems.some((obj) => obj.id === id);

    if (!hasIndex) {
      if (packages) {
        const updateItems = localStorateItems;
        updateItems.push({ id, packages });
        setLocalStorage('basket', updateItems);
        setBasketItems(getLocalStorage('basket'));
        return;
      }
      const updateItems = localStorateItems;
      updateItems.push({ id });
      setLocalStorage('basket', updateItems);
      setBasketItems(getLocalStorage('basket'));
    }
  };

  const removeLocalStorageItem = (id, packages) => {
    const item = { id };
    if (packages) {
      item.packages = packages;
    }

    removeLocalStorageItemById('basket', item);
    setBasketItems(getLocalStorage('basket'));
  };

  return (
    <BasketContext.Provider
      value={{
        basketAmount: basketItems.length,
        basketItems,
        setLocalStorageItems,
        removeLocalStorageItem,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
