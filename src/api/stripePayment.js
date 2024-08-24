import axios from 'axios';

export const stripePayment = async ({
  amount,
  currency = 'EUR',
  description = 'test',
  success_url = 'https://kraabmod.fi/basket/confirmation',
  cancel_url = 'https://kraabmod.fi/basket/confirmation',
}) => {
  try {
    const url = `https://kraabmod.fi/api/stripe_payment.php`;

    // Отправляем запрос на сервер для создания Checkout Session
    const response = await axios.post(url, {
      amount,
      currency,
      description,
      success_url,
      cancel_url,
    });

    if (response.data.url) {
      localStorage.setItem('payment_id', response.data.id);
      localStorage.setItem('payment_method', 'stripe');
      window.location.href = response.data.url;
    } else {
      console.error('Не удалось получить URL для перенаправления.');
    }
  } catch (error) {
    console.error('Ошибка при создании Checkout Session:', error);
    throw error;
  }
};
