import axios from 'axios';

export const sendEmail = async ({ orderData }) => {
  try {
    const url = `https://kraabmod.fi/api/send_order.php`;

    const axiosConfig = {
      method: 'POST',
      url,
      data: JSON.stringify(orderData),
      axiosConfig: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios(axiosConfig);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
