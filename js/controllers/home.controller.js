let HomeController = function($scope, SC, $http) {
  
  let url = 'http://api.soundcloud.com/tracks?client_id=' + SC;

  $scope.search = (query) => {
    
    query = encodeURI(query);

    $http.get(url + '&q=' + query).then( (res) => {

      console.log(res);

    });

  };

};

HomeController.$inject = ['$scope', 'SC', '$http'];

export default HomeController;