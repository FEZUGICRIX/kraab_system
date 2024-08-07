import axios from 'axios';

const BASE_URL = 'https://kraabmod.fi/api/';

export const getCalculateOrder = async ({ requestData }) => {
  try {
    const url = `${BASE_URL}/calculate_order_total.php`
    
    const axiosConfig = {
      method: 'POST',
      url,
      data: JSON.stringify(requestData),
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
