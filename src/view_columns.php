<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smartpakinggame";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to get column names
$sql = "DESCRIBE scores";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<h1>Table Columns</h1>";
    echo "<table border='1'><tr><th>Field</th><th>Type</th><th>Null</th><th>Key</th><th>Default</th><th>Extra</th></tr>";
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["Field"]. "</td><td>" . $row["Type"]. "</td><td>" . $row["Null"]. "</td><td>" . $row["Key"]. "</td><td>" . $row["Default"]. "</td><td>" . $row["Extra"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>
