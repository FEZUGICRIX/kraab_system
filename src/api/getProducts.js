import axios from 'axios';

const BASE_URL = 'https://kraabmod.fi/api/';

export const getProducts = async ({
  catalog,
  type = 'get_products',
  id = null,
  orderData = null, // Добавляем параметр для отправки данных заказа
}) => {
  try {
    let url = BASE_URL;

    if (type === 'get_products' && catalog) {
      url += `get_products.php?catalog=${catalog}`;
    } else if (type === 'get_product' && id) {
      url += `get_product.php?id=${id}`;
    } else if (type === 'send_order' && orderData) { // Обрабатываем запрос на отправку заказа
      url += `send_order.php`;
    } else {
      throw new Error('Invalid parameters');
    }

    const axiosConfig = {
      method: type === 'send_order' ? 'POST' : 'GET', // Устанавливаем метод
      url,
      data:  JSON.stringify(orderData), // Добавляем данные заказа, если они есть
      headers: {
        'Content-Type': 'application/json',
      },
    };

    // Устанавливаем withCredentials только для запросов типа 'send_order'
    if (type === 'send_order') {
      axiosConfig.withCredentials = true;
    }

    const response = await axios(axiosConfig);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Перебрасываем ошибку для обработки
  }
};
