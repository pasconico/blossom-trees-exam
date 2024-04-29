<?php
include_once $_SERVER["DOCUMENT_ROOT"] . "/lib/detect_mobile.php";
$mobile_detect = new Mobile_Detect;
echo json_encode(array("isMobile"=>$mobile_detect->isMobile()));