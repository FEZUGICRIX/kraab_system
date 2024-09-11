import axios from 'axios';

export default async function handler(req, res) {
  // Разрешаем запросы с методами POST и OPTIONS
  if (req.method !== 'POST' && req.method !== 'OPTIONS') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Разрешаем CORS
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Если это запрос OPTIONS, просто завершаем
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Получение данных из POST-запроса
  const data = req.body;

  // Проверка, что данные корректны
  if (!data || !data.amount || !data.currency || !data.redirect_url) {
    return res
      .status(400)
      .json({ error: 'Недостаточно данных для создания заказа' });
  }

  // Создание параметров запроса для Stripe
  const postData = new URLSearchParams({
    'payment_method_types[]': 'card',
    'line_items[0][price_data][currency]': data.currency,
    'line_items[0][price_data][product_data][name]':
      data.description || 'Tilaus',
    'line_items[0][price_data][unit_amount]': data.amount,
    'line_items[0][quantity]': '1',
    mode: 'payment',
    success_url: data.redirect_url || 'https://kraabmod.fi/',
    cancel_url: data.cancel_url || 'https://kraabmod.fi/',
  });

  const apiKey = process.env.NEXT_PUBLIC_STRIPE_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_STRIPE_URL;

  try {
    // Отправляем запрос к Stripe API
    const response = await axios.post(apiUrl, postData.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Возвращаем ответ
    return res.status(response.status).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(error.response?.status || 500).json({
      error: error.message,
      response: error.response?.data || null,
    });
  }
}
