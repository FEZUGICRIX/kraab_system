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
  totalPrice: 0,
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

  // Calculate the total cost of the goods in the basket
  const totalPrice = allProducts
    .filter((item) => basketItems.includes(String(item.id)))
    .map((item) => item.price)
    .reduce((total, price) => total + (price || 0), 0);

  return (
    <BasketContext.Provider
      value={{
        basketAmount: basketItems.length,
        totalPrice,
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
