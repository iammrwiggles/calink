app.factory('StudioFactory', function($http) {
  console.log('Studio Factory loaded');
  var factory = {};

  factory.index  = function(callback) {
    $http.get('/studios').then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  // factory.search = function(styleTagSearchString, callback) {
  //     if (styleTagSearchString == undefined) {
  //       $http.get('/styleTags').then(function(res) {
  //         if (typeof callback === 'function') {
  //           callback(res.data);
  //         }
  //       })
  //   } else {
  //       $http.get('/search/'+styleTagSearchString).then(function(res) {
  //           if (typeof callback === 'function') {
  //             callback(res.data);
  //           }
  //       })
  //   }
  //
  // }
  factory.show = function(id, callback) {
    $http.get('/studios/'+id).then(function(res) {
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  factory.create = function(newStudio, callback) {
    $http.post('/studios/', newStudio).then(function(res) {
      console.log(res.data);
      if (typeof callback === 'function') {
        callback(res.data);
      }
    })
  }
  // factory.update = function(survey, callback) {
  //   $http.put('/survey/'+survey._id, survey).then(function(res) {
  //     if (typeof callback === 'function') {
  //       callback(res.data);
  //     }
  //   })
  // }
  // factory.delete = function(survey, callback) {
  //   $http.delete('/survey/'+survey._id).then(function(res) {
  //     console.log(res.data);
  //     if (typeof callback === 'function') {
  //       callback(res.data);
  //     }
  //   })
  // }

  return factory;
})
