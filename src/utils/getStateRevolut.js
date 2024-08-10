import axios from 'axios';

export const getStateRevolut = async (paymentId) => {
  try {
    const response = await axios.post(
      'https://kraabmod.fi/api/revolut_confirmation.php',
      {
        order_id: paymentId,
      }
    );

    return response.data
  } catch (error) {
    console.error('Ошибка при получении данных заказа:', error);
  }
};
