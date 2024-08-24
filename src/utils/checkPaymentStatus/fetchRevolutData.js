import axios from 'axios';
import { sendEmail } from '@/api/sendEmail';

export const fetchRevolutData = async ({
  orderData,
  paymentId,
  emailSent,
  setEmailSent,
  setBasketItems,
  basketProducts,
  basketItemsMap,
  totalPrice,
  shippingValue,
}) => {
  try {
    setBasketItems([]);
    const response = await axios.post(
      'https://kraabmod.fi/api/revolut_confirmation.php',
      { order_id: paymentId }
    );

    if (
      response.data &&
      response.data.state === 'completed' &&
      !emailSent
    ) {
      if (!orderData) {
        console.error('Нет данных заказа в localStorage');
        return;
      }

      const { fullName, email, phone, address, state, city, zip } =
        orderData;

      const orderDataToSend = {
        fullName,
        email,
        phone,
        address,
        state,
        city,
        zip,
        time: response.data.updated_at,
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
  }
};
