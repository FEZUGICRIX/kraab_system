export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization'
    );
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    try {
      const { basketProducts, basketItemsMap } = req.body;

      if (
        !Array.isArray(basketProducts) ||
        typeof basketItemsMap !== 'object'
      ) {
        return res.status(400).json({ error: 'Invalid data format' });
      }

      function calculateTotalPrice(basketProducts, basketItemsMap) {
        let total = 0;
        basketProducts.forEach((item) => {
          const basketItem = basketItemsMap[item.id] || {};
          const quantity = basketItem.packages || 1;
          const packingVolume = item.packing_volume || 1;
          total += item.price * quantity * packingVolume;
        });
        return parseFloat(total.toFixed(2));
      }

      // Расчет totalPrice
      const totalPrice = calculateTotalPrice(
        basketProducts,
        basketItemsMap
      );

      // Расчет налогов
      const tax = parseFloat((totalPrice * 0.255).toFixed(2));

      // Расчет стоимости доставки
      const shippingValue =
        totalPrice === 0 ? 0 : totalPrice >= 500 ? 0 : 19.9;

      // Общая стоимость заказа
      const totalOrderPrice = Math.round(
        (totalPrice + shippingValue + tax) * 100
      );

      return res.status(200).json({
        totalPrice,
        shippingValue,
        tax,
        totalOrderPrice,
      });
    } catch (error) {
      console.error('Error calculating order:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
