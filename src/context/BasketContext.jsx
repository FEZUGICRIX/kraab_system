import { createContext, useState } from 'react';
import {
  getLocalStorage,
  removeLocalStorageItemById,
  setLocalStorage,
} from '../utils/localStorage';
import { PRODUCTS } from '@PRODUCTS';

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

  const setLocalStorageItems = (id) => {
    const index = basketItems.indexOf(Number(id));

    if (index === -1) {
      setLocalStorage('basket', id);
      setBasketItems(getLocalStorage('basket'));
    }
  };

  const removeLocalStorageItem = (id) => {
    removeLocalStorageItemById('basket', id);
    setBasketItems(getLocalStorage('basket'));
  };

  // We get all the products in the form of a one-dimensional array
  const allProducts = Object.values(PRODUCTS).flat();

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
