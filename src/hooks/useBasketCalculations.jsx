import { useEffect, useState } from 'react';
import { getProducts } from '@/api/getProducts';
import useBasket from '@/hooks/useBasket';
import { getCalculateOrder } from '../api/getCalculateOrder';

export const useBasketCalculations = () => {
  const { basketItems, removeLocalStorageItem, setBasketData } =
    useBasket();
  const [basketProducts, setBasketProducts] = useState([]);
  const [orderCalculation, setOrderCalculation] = useState(null);

  useEffect(() => {
    const fetchBasketData = async () => {
      try {
        const rawProducts = basketItems.map((item) => item.id);
        const basketItemsMap = basketItems.reduce((map, item) => {
          map[item.id] = item;
          return map;
        }, {});

        // Fetch products
        const products = await Promise.all(
          rawProducts.map((id) => getProducts({ type: 'get_product', id }))
        );
        const filteredProducts = products.filter(Boolean);
        setBasketProducts(filteredProducts);

        // Fetch order calculation
        const requestData = {
          basketProducts: filteredProducts,
          basketItemsMap,
        };
        const response = await getCalculateOrder({ requestData });
        setOrderCalculation(response);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchBasketData();
  }, [basketItems]);

  return {
    basketItems,
    basketItemsMap: basketItems.reduce((map, item) => {
      map[item.id] = item;
      return map;
    }, {}),
    basketProducts,
    setBasketProducts,
    removeLocalStorageItem,
    setBasketData,
    ...orderCalculation,
  };
};
