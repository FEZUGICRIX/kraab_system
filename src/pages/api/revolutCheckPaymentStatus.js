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

  // Обработка OPTIONS запросов
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Получение данных из POST-запроса
  const data = req.body;

  // Проверка, что данные корректны
  if (!data || !data.order_id) {
    return res.status(400).json({ error: 'Недостаточно данных' });
  }

  const apiKey = process.env.NEXT_PUBLIC_REVOLUT_API_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_REVOLUT_URL;

  try {
    const response = await axios.get(`${apiUrl}/${data.order_id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Revolut-Api-Version': '2023-09-01',
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
