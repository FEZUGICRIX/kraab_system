import { query } from '@/lib/db';

export default async function handler(req, res) {
  const { catalog } = req.query;

  if (!catalog) {
    return res
      .status(400)
      .json({ message: 'Необходимо указать параметр catalog.' });
  }

  try {
    // Важно: Проверьте, что catalog содержит допустимое имя таблицы
    const validTables = [
      'moduleo_products',
      'kraab_slim_products',
      'kraab_gipps_products',
      'denkirs_products',
      'jm_products',
    ];
    if (!validTables.includes(catalog)) {
      return res
        .status(400)
        .json({ message: 'Некорректное имя таблицы.' });
    }

    // Выполнение запроса к базе данных
    const results = await query(`SELECT * FROM ${catalog}`);
    res.status(200).json(results);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Ошибка подключения к базе данных.', error });
  }
}
