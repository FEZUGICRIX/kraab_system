import axios from 'axios';

const BASE_URL = 'https://kraabmod.fi/';

export const getProducts = async ({
  catalog,
  type = 'get_products',
  id = null,
}) => {
  try {
    let url = BASE_URL;

    if (type === 'get_products' && catalog) {
      url += `get_products.php?catalog=${catalog}`;
    } else if (type === 'get_product' && id) {
      url += `get_product.php?id=${id}`;
    } else {
      throw new Error('Invalid parameters');
    }
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
