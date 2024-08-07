import axios from 'axios';

export const revolutPayment = async ({
  amount,
  currency = 'EUR',
  redirect_url,
}) => {
  try {
    const url = `https://kraabmod.fi/api/revolut_payment.php`;

    const response = await axios.post(url, {
      amount,
      currency,
      redirect_url,
    });
    localStorage.removeItem('payment_id');
    localStorage.setItem('payment_id', response.data.id);

    window.location.href = response.data.checkout_url;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
