import { useContext } from 'react';
import BasketContext from '@/context/BasketContext';

const useBasket = () => {
  return useContext(BasketContext);
};

export default useBasket;
