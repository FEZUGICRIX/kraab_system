import { query } from '@/lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res
      .status(400)
      .json({ message: 'Необходимо указать параметр id.' });
  }

  try {
    const tables = [
      'moduleo_products',
      'kraab_slim_products',
      'kraab_gipps_products',
      'denkirs_products',
      'jm_products',
    ];

    let result = null;

    for (const table of tables) {
      const rows = await query(`SELECT * FROM ${table} WHERE id = ?`, [
        id,
      ]);

      if (rows.length > 0) {
        result = { table, data: rows[0] };
        break;
      }
    }

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        message: 'Запись с таким id не найдена в указанных таблицах.',
      });
    }
  } catch (error) {
    console.error('Ошибка подключения к базе данных:', error.message);
    res.status(500).json({
      message: 'Ошибка подключения к базе данных.',
      error: error.message,
    });
  }
}
