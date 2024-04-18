<?php
$url = 'https://playtech-jackpot.systems88.com/?currency=KRW';
$response = file_get_contents($url);

if ($response === false) {
    // Handle error if the request fails
    echo json_encode(array("error" => "Failed to fetch data from the API"));
} else {
    $jackpot = json_decode($response);

    if ($jackpot === null) {
        // Handle error if JSON decoding fails
        echo json_encode(array("error" => "Failed to decode JSON response"));
    } else {
        // Format the jackpot amount
        $value = number_format($jackpot->jackpot_amount, 2, '.', '');

        // Calculate the increment
        $increment = $jackpot->interval_1sec * 0.01;

        // Encode the formatted values as JSON
        echo json_encode(array("counterStart" => $value, "increment" => $increment));
    }
}
?>
