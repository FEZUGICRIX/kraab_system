import { useEffect, useState } from 'react';
import useBasket from '@/hooks/useBasket';
import axios from 'axios';

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
        const productRequests = rawProducts.map((id) =>
          axios
            .get(`/api/product?id=${id}`)
            .catch((error) => ({ error, id }))
        );

        const productResponses = await Promise.all(productRequests);

        // Filter successful responses and extract data
        const filteredProducts = productResponses
          .map((item) => item.data)
          .filter((response) => !response.error) // Exclude error responses
          .map((response) => response.data); // Extract data

        setBasketProducts(filteredProducts);

        // Fetch order calculation
        const requestData = {
          basketProducts: filteredProducts,
          basketItemsMap,
        };

        const { data } = await axios.post(
          '/api/calculateOrder',
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        setOrderCalculation(data);
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
