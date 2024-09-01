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
  const { session_id } = req.body;

  // Проверка, что session_id передан
  if (!session_id) {
    return res
      .status(400)
      .json({ error: 'Ошибка: отсутствует session_id' });
  }

  const apiKey = process.env.NEXT_PUBLIC_STRIPE_API_KEY;
  const apiUrl = `https://api.stripe.com/v1/checkout/sessions/${session_id}`;

  try {
    // Выполняем GET-запрос к Stripe API
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Возвращаем ответ от Stripe API
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error);

    return res.status(error.response?.status || 500).json({
      error: 'Ошибка выполнения запроса к Stripe API',
      message: error.message,
      response: error.response?.data || null,
    });
  }
}
