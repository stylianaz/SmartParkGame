<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smartparkinggame"; // Ensure this is the correct database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(array('success' => false, 'message' => 'Connection failed: ' . $conn->connect_error));
    exit();
}

$sql = "SELECT Name, Surname, Score, Points FROM scores";
$result = $conn->query($sql);

$scores = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $scores[] = $row;
    }
}

$conn->close();

echo json_encode(array('success' => true, 'scores' => $scores));
?>
