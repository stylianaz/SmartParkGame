<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smartpakinggame"; // Corrected from 'smartpakinggame'

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "DB connected<br>";
}

// Query to fetch data from the Scores table
$sql = "SELECT * FROM Scores";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Create an array to hold the results
    $data = array();

    // Fetch data as an associative array and add it to the data array
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Encode the data array into JSON format and echo it
    echo "<pre>";
    echo json_encode($data, JSON_PRETTY_PRINT);
    echo "</pre>";
} else {
    echo "0 results";
}

// Close the connection
$conn->close();
?>
