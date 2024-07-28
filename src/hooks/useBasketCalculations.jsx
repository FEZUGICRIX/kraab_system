import { useEffect, useState } from 'react';
import { getProducts } from '@api/getProducts';
import useBasket from '../hooks/useBasket';

export const useBasketCalculations = () => {
  const { basketItems, removeLocalStorageItem, setBasketData } =
    useBasket();
  const [basketProducts, setBasketProducts] = useState([]);

  const rawProducts = basketItems.map((item) => item.id);

  useEffect(() => {
    const fetchBasketProducts = async () => {
      try {
        const products = await Promise.all(
          rawProducts.map((id) => getProducts({ type: 'get_product', id }))
        );
        const filteredProducts = products.filter(Boolean);
        setBasketProducts(filteredProducts);
      } catch (error) {
        console.error('Ошибка при получении продуктов:', error);
      }
    };

    fetchBasketProducts();
  }, [basketItems]);

  const basketItemsMap = basketItems.reduce((map, item) => {
    map[item.id] = item;
    return map;
  }, {});

  const calculateTotalPrice = () => {
    return basketProducts.reduce((total, item) => {
      const basketItem = basketItemsMap[item.id];
      const quantity = basketItem?.packages || 1;
      const packingVolume = item.packing_volume || 1;
      return (
        Number(total) +
        Number(item.price) * quantity * packingVolume
      ).toFixed(2);
    }, 0);
  };

  const totalPrice = Number(calculateTotalPrice());
  const shippingValue = calculateTotalPrice() >= 500 ? 0 : 19.9;

  return {
    basketItems,
    basketItemsMap,
    basketProducts,
    setBasketProducts,
    removeLocalStorageItem,
    setBasketData,
    totalPrice,
    shippingValue,
  };
};
