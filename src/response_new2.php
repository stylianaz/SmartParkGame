<?php

header('Content-Type: application/json');

// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smartparkinggame"; // Ensure this is the correct database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(array('success' => false, 'message' => 'Connection failed: ' . $conn->connect_error)));
}

// Get raw input data
$raw_data = file_get_contents("php://input");
file_put_contents('debug_log.txt', "Raw data: " . $raw_data . PHP_EOL, FILE_APPEND);

// Decode JSON data
$data = json_decode($raw_data, true);

// Check if JSON decoding was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    die(json_encode(array('success' => false, 'message' => 'Invalid JSON format')));
}

// Initialize an array to collect missing fields
$missing_fields = [];

// Check for missing fields
if (!isset($data['firstname']) || $data['firstname'] === '') {
    $missing_fields[] = 'firstname';
}
if (!isset($data['lastname']) || $data['lastname'] === '') {
    $missing_fields[] = 'lastname';
}
if (!isset($data['email']) || $data['email'] === '') {
    $missing_fields[] = 'email';
}
if (!isset($data['score']) || $data['score'] === '') {
    $missing_fields[] = 'score';
}
if (!isset($data['playerScore']) || $data['playerScore'] === '') {
    $missing_fields[] = 'playerScore';
}
if (!isset($data['loss']) && $data['loss'] !== 0) {
    $missing_fields[] = 'loss';
}

// If there are any missing fields, return an error message
if (!empty($missing_fields)) {
    die(json_encode(array('success' => false, 'message' => 'Missing input data: ' . implode(', ', $missing_fields))));
}

// Extract data
$fname = $data['firstname'];
$lname = $data['lastname'];
$email = $data['email'];
$score = $data['score'];
$playerScore = $data['playerScore'];
$loss = isset($data['loss']) ? $data['loss'] : 0;

// Log the extracted data
file_put_contents('debug_log.txt', "Extracted data: Name = $fname, Surname = $lname, Email = $email, Score = $score, Points = $playerScore, NumberLooses = $loss" . PHP_EOL, FILE_APPEND);

// Prepare to check if the user exists
$stmt = $conn->prepare("SELECT Score, Points FROM scores WHERE Email = ?");
if ($stmt === false) {
    die(json_encode(array('success' => false, 'message' => 'Prepare failed: ' . $conn->error)));
}
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    // User exists, check the current score and points
    $stmt->bind_result($currentScore, $currentPoints);
    $stmt->fetch();

    // Determine if the new score is better or if points should be updated
    if (compareScores($score, $currentScore) || $playerScore > $currentPoints) {
        // Update the user's information, score, and points
        $stmt = $conn->prepare("UPDATE scores SET Name = ?, Surname = ?, Score = ?, Points = ?, NumberLooses = ? WHERE Email = ?");
        if ($stmt === false) {
            die(json_encode(array('success' => false, 'message' => 'Prepare failed: ' . $conn->error)));
        }
        $stmt->bind_param("sssiss", $fname, $lname, $score, $playerScore, $loss, $email);
        if ($stmt->execute()) {
            echo json_encode(array('success' => true, 'message' => 'Record successfully updated'));
        } else {
            echo json_encode(array('success' => false, 'message' => 'Error: ' . $stmt->error));
        }
    } else {
        echo json_encode(array('success' => true, 'message' => 'Score is not higher and points are not increased, no update needed'));
    }
} else {
    // User does not exist, insert new record
    $stmt = $conn->prepare("INSERT INTO scores (Name, Surname, Email, Score, Points, NumberLooses) VALUES (?, ?, ?, ?, ?, ?)");
    if ($stmt === false) {
        die(json_encode(array('success' => false, 'message' => 'Prepare failed: ' . $conn->error)));
    }
    
    // Log the data to be inserted
    file_put_contents('debug_log.txt', "Inserting data: Name = $fname, Surname = $lname, Email = $email, Score = $score, Points = $playerScore, NumberLooses = $loss" . PHP_EOL, FILE_APPEND);
    
    $stmt->bind_param("sssssi", $fname, $lname, $email, $score, $playerScore, $loss);
    if ($stmt->execute()) {
        echo json_encode(array('success' => true, 'message' => 'Record successfully inserted'));
    } else {
        echo json_encode(array('success' => false, 'message' => 'Error: ' . $stmt->error));
    }
}

// Close the statement and connection
$stmt->close();
$conn->close();

// Function to compare scores
function compareScores($newScore, $currentScore) {
    $ranking = array("NoReward", "Bronze", "Silver", "Gold");
    return array_search($newScore, $ranking) > array_search($currentScore, $ranking);
}
?>
