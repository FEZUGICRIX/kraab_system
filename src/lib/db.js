import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.NEXT_PUBLIC_DB_HOST,
  port: process.env.NEXT_PUBLIC_DB_PORT,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_DB_NAME,
});

export async function query(sql, params = []) {
  try {
    // Выполняем запрос
    const [results] = await pool.execute(sql, params);

    // Проверяем результат
    if (!Array.isArray(results)) {
      console.error('Результат запроса не является массивом:', results);
      throw new Error('Неожиданный результат запроса.');
    }

    return results;
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error.message);
    throw error; // Перебрасываем ошибку для дальнейшей обработки
  }
}
