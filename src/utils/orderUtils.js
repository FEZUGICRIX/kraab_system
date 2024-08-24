import { sendEmail } from '@/api/sendEmail';
import { getStateRevolut } from './getStateRevolut';

export const processOrder = async (
  apiEndpoint,
  dataKey,
  statusValue,
  paymentId,
  totalPrice,
  shippingValue,
  basketProducts,
  basketItemsMap,
  setLoading,
  setBasketItems,
  setEmailSent
) => {
  try {
    setBasketItems([]);
    const response = await getStateRevolut(paymentId);

    console.log('dataKey:', response[dataKey]);
    console.log('statusValue:', statusValue);

    if (response && response[dataKey] === statusValue) {
      const orderDataRaw = localStorage.getItem('orderData');
      const orderData = JSON.parse(orderDataRaw);

      if (!orderData) {
        console.error('Нет данных заказа в localStorage');
        return;
      }

      const { fullName, email, phone, address, state, city, zip } =
        orderData;
      const timestamp = response.updated_at || response.created;
      const date = new Date(timestamp * 1000).toISOString();

      const orderDataToSend = {
        fullName,
        email,
        phone,
        address,
        state,
        city,
        zip,
        time: date,
        shippingValue,
        totalPrice: (totalPrice + shippingValue).toFixed(2),
        items: basketProducts.map((item) => {
          const basketItem = basketItemsMap[item.id];
          return {
            ...item,
            packages: basketItem?.packages || null,
          };
        }),
      };

      if (!emailSent) {
        await sendEmail({ orderData: orderDataToSend });
        setEmailSent(true);
      }
    }
  } catch (error) {
    console.error('Ошибка при получении данных заказа:', error);
  } finally {
    setLoading(false);
  }
};
