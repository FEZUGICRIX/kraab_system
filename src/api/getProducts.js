import axios from 'axios';

const BASE_URL = 'https://kraabmod.fi/api/';

export const getProducts = async ({ type, catalog = null, id = null }) => {
  try {
    let url = BASE_URL;

    if (type === 'get_products' && catalog) {
      url += `get_products.php?catalog=${catalog}`;
    } else if (type === 'get_product' && id) {
      url += `get_product.php?id=${id}`;
    } else if (type === 'get_all_products') {
      url += `get_all_product_Ids.php`;
    } else {
      throw new Error('Invalid parameters');
    }

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
