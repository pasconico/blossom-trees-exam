var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);



myApp.controller("AppController", ['$scope', '$http', '$anchorScroll', function ($scope, $http, $anchorScroll) {

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

    $scope.getAOSDirection = function(index) {
        if (index === 0 || index === 1) {
            return 'fade-up-right';
        } else if (index === 2) {
            return 'fade-up';
        } else if (index === 3 || index === 4) {
            return 'fade-up-left';
        }
    };
    
    $scope.setAOSDelayPartners = function(index) {
        var delay = index * 500;
        angular.element(document.querySelectorAll('.tech-partners-image'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelayDesc = function (index) {
        var delay = index * 500;
        angular.element(document.querySelectorAll('.full-stack-email-desc-lists'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelaySteps = function (index) {
        var delay = index * 800;
        angular.element(document.querySelectorAll('.steps-main-content'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelayFeatures = function (index) {
        var delay = index * 600;
        angular.element(document.querySelectorAll('.blossom-trees-features-content'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelayBrands = function (index) {
        var delay = index * 500;
        angular.element(document.querySelectorAll('.brands'))[index].setAttribute('data-aos-delay', delay);
    };

    $scope.setAOSDelayFAQs = function (index) {
        var delay = index * 500;
        angular.element(document.querySelectorAll('.brands'))[index].setAttribute('data-aos-delay', delay);
    };


    $scope.getStepAOS = function(index, offset) {
        var actualIndex = index + offset;
        return actualIndex % 2 === 0 ? 'fade-left' : 'fade-right';
    };
    
    $scope.setAOSDelaySteps = function(index) {
        var delay = index * 500;
        angular.element(document.querySelectorAll('.steps-main-content'))[index].setAttribute('data-aos-delay', delay);
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

    $http.get('data/process-list.json').then(function (response) {
        $scope.guideList = response.data;
    });
}]);