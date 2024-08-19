var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);



myApp.controller("AppController", ['$scope', '$http', function ($scope, $http) {
    $scope.gspNo = "";
    $scope.activeLink = null;

    $scope.setActiveLink = function (linkName) {
        $scope.activeLink = linkName;
    }

    $scope.clickButton = function () {
        Swal.fire({
            title: "Coming Soon!",
            text: "Stay tuned...",
            icon: "info",
            customClass: {
                popup: 'custom-popup',
                confirmButton: 'custom-swal-button',
                icon: 'custom-swal-icon'
            }
        });
    }

    $scope.setAOSDelayGameList = function (index) {
        var delay = index * 300;
        angular.element(document.querySelectorAll('.image-hover'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelayPromotions = function (index) {
        var delay = index * 500;
        angular.element(document.querySelectorAll('.promotions'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelayGSP = function (index) {
        var delay = index * 100;
        angular.element(document.querySelectorAll('.gsp-image'))[index].setAttribute('data-aos-delay', delay);
    };


    $http.get('data/tech-partners.json').then(function (response) {
        $scope.techPartnersList = response.data;
    });

    $http.get('data/features.json').then(function (response) {
        $scope.featuresList = response.data;
    });

    $http.get('data/cannabis-brands.json').then(function (response) {
        $scope.brandsList = response.data;
    });

    $http.get('data/description-list.json').then(function (response) {
        $scope.descList = response.data;
    });
}]);