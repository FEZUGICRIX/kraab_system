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

  // Получение данных из POST-запроса
  const data = req.body;

  // Проверка, что данные корректны
  if (!data || !data.amount || !data.currency) {
    return res
      .status(400)
      .json({ error: 'Недостаточно данных для создания заказа' });
  }

  // Конвертируем данные в JSON
  const jsonData = {
    amount: data.amount,
    currency: data.currency,
    description: data.description || '',
    redirect_url: data.redirect_url || '',
    cancel_url: data.cancel_url || '',
  };

  const apiKey = process.env.NEXT_PUBLIC_REVOLUT_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_REVOLUT_URL;

  try {
    const response = await axios.post(apiUrl, jsonData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'Revolut-Api-Version': '2024-05-01',
      },
    });

    // Возвращаем ответ
    return res.status(response.status).json(response.data);
  } catch (error) {
    // Обработка ошибок
    return res.status(error.response?.status || 500).json({
      error: error.message,
      response: error.response?.data || null,
    });
  }
}
