<?php 


include($_SERVER['DOCUMENT_ROOT'].'/lib/detect_mobile.php');
$mobile_detect = new Mobile_Detect;
if ($mobile_detect->isMobile() || $mobile_detect->isTablet()) {
    if (!isset($_SESSION["viewDesktop"])) {
        header("Location:/mobile/#/");
    }
}

?>

<!DOCTYPE html>
<html lang="en" ng-app="myApp">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CASINO</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="common/css/navbar.css" type="text/css">
    <link rel="stylesheet" href="common/css/banner.css" type="text/css">
    <link rel="stylesheet" href="common/css/odometer.css" type="text/css">
    <link rel="stylesheet" href="common/css/game-list.css" type="text/css">
    <link rel="stylesheet" href="common/css/exclusive-promotion.css" type="text/css">
    <link rel="stylesheet" href="common/css/game-service-provider.css" type="text/css">
    <link rel="stylesheet" href="common/css/footer.css" type="text/css">
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" >
    <link rel="stylesheet" href="/app.css" type="text/css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="app\lib\angular-1.8.2\angular.min.js"></script>
    <script src="app\lib\angular-1.8.2\angular-route.min.js"></script>
    <script src="app\lib\angular-1.8.2\angular-animate.min.js"></script>
    <script src="app\app.js"></script>

</head>

<body ng-controller="AppController">
    <div class="main-container">
        
        <div ng-include="'components/banner.html'"></div>
        <div ng-include="'components/odometer.html'"></div>
        <div ng-include="'components/game-list.html'"></div>
        <div ng-include="'components/exclusive-promotion.html'"></div>
        <div ng-include="'components/game-service-provider.html'"></div>
        <div ng-include="'components/footer.html'"></div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="/common/js/jquery-jOdometer.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>
        AOS.init();
    </script>
</body>

</html>