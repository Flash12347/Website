var app= angular.module('mainApp',[]);
app.controller('people', function($scope, $http){
    $http.get('http://localhost:4200/SocialFitWebsite/home/database.json')
    .success(function(response){
        $scope.persons = response.records;
    });
});