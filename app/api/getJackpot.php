<?
$url = file_get_contents('https://playtech-jackpot.systems88.com/?currency=KRW');
$jackpot = json_decode($url);
$value = number_format($jackpot->jackpot_amount, 2, '.', '');

echo json_encode(array("counterStart" => $value, "increment" => $jackpot->interval_1sec * 0.01));
