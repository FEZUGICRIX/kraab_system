<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json');

// Параметр catalog из GET или POST запроса
$catalog = $_GET['catalog'] ?? $_POST['catalog'] ?? null;

// Проверка наличия параметра catalog
if ($catalog === null) {
    http_response_code(400); // Возвращаем ошибку 400 Bad Request, если параметр не указан
    echo json_encode(array("error" => "Parameter 'catalog' is required"));
    exit;
}

// Подключение к базе данных
$servername = "localhost:3306";
$username = "kraabmod_user";
$password = "dbLogin22";
$dbname = "kraabmod_products";

// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Подготовка SQL запроса в зависимости от catalog
if ($catalog === 'denkirs_products') {
    $sql = "SELECT SKU, title, img, img2, img3, material, price, length, dimmable, color_of_light, description, height, angle_of_dispersion FROM $catalog";
} else {
    $sql = "SELECT id, img, title, colors, price FROM $catalog";
}

// Выполнение SQL запроса
$result = $conn->query($sql);

// Обработка результатов запроса
$products = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Декодирование JSON строки в массив
        $row['colors'] = json_decode($row['colors']);
        $products[] = $row;
    }
}

// Закрытие соединения с базой данных
$conn->close();

// Вывод результатов в формате JSON
echo json_encode($products);
?>
