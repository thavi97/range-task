<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$jsonFile = '../src/assets/data/product.json'; 

if (file_exists($jsonFile)) {
    $jsonData = file_get_contents($jsonFile);
    echo $jsonData;
} else {
    http_response_code(404);
    echo json_encode(["error" => "File not found"]);
}
?>
