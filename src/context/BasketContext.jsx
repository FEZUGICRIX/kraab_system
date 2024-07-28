import { createContext, useState, useEffect } from 'react';
import {
  getLocalStorage,
  removeLocalStorageItemById,
  setLocalStorage,
} from '../utils/localStorage';

const BasketContext = createContext({
  basketData: {},
  setBasketData: () => {},
  basketAmount: 0,
  basketItems: [],
  setLocalStorageItems: () => {},
  removeLocalStorageItem: () => {},
});

export const BasketContextProvider = ({ children }) => {
  const [basketData, setBasketData] = useState({});
  const [basketItems, setBasketItems] = useState(() => getLocalStorage('basket') || []);

  // Синхронизация basketItems с Local Storage
  useEffect(() => {
    setLocalStorage('basket', basketItems);
  }, [basketItems]);

  // Функция добавления/обновления элемента в Local Storage
  const setLocalStorageItems = ({ id, packages }) => {
    setBasketItems(prevItems => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex(item => item.id === id);

      if (index === -1) {
        if (packages) {
          updatedItems.push({ id, packages });
        } else {
          updatedItems.push({ id });
        }
      } else {
        if (packages) {
          updatedItems[index] = { id, packages };
        } else {
          updatedItems[index] = { id };
        }
      }

      return updatedItems;
    });
  };

  // Функция удаления элемента из Local Storage
  const removeLocalStorageItem = (id, packages) => {
    setBasketItems(prevItems => {
      const updatedItems = prevItems.filter(item => {
        if (packages) {
          return !(item.id === id && item.packages === packages);
        }
        return item.id !== id;
      });

      return updatedItems;
    });
  };

  return (
    <BasketContext.Provider
      value={{
        basketData,
        setBasketData,
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
