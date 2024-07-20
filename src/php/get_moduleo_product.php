<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost:3306";
$username = "kraabmod_user";
$password = "dbLogin22";
$dbname = "kraabmod_products";

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['id'])) {
    $id = $conn->real_escape_string($_GET['id']);
    $tables = ['favorite_products', 'moduleo_products', 'denkirs_products']; // Добавьте сюда все ваши таблицы

    $product = null;
    foreach ($tables as $table) {
        $sql = "SELECT * FROM $table WHERE id = $id";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $product = $result->fetch_assoc();
            $product['colors'] = json_decode($product['colors']); // Декодируем JSON-строку в массив
            $product['catalog'] = $table; // Добавляем информацию о каталоге
            break;
        }
    }

    if ($product) {
        header('Content-Type: application/json');
        echo json_encode($product);
    } else {
        header('HTTP/1.1 404 Not Found');
        echo json_encode(array("message" => "Product not found"));
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(array("message" => "Missing id parameter"));
}

$conn->close();
?>
