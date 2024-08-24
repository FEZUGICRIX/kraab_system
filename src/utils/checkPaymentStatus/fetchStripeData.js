import axios from 'axios';
import { sendEmail } from '@/api/sendEmail';

export const fetchStripeData = async ({
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
      'https://kraabmod.fi/api/stripe_confirmation.php',
      { session_id: paymentId }
    );

    if (
      response.data &&
      response.data.status === 'complete' &&
      !emailSent
    ) {
      if (!orderData) {
        console.error('Нет данных заказа в localStorage');
        return;
      }

      const { fullName, email, phone, address, state, city, zip } =
        orderData;

      const timestamp = response.data.created;
      const date = new Date(timestamp * 1000);

      const orderDataToSend = {
        fullName,
        email,
        phone,
        address,
        state,
        city,
        zip,
        time: date.toISOString(),
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
        console.log('email sent succsesful');

        setEmailSent(true);
      }
    }
  } catch (error) {
    console.error('Ошибка при получении данных заказа:', error);
  }
};
