// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require angular
//= require jquery
//= require_self

var fakeio = angular.module('fakeio', [])
  .config(function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
});

fakeio.controller('PlaylistCtrl', function($scope, $http) {
  $scope.albums = window.ALBUMS;
  $scope.playlist = window.PLAYLIST;
  
  $scope.addToPlaylist = function(albumIndex) {
    var album = $scope.albums[albumIndex];
    $http.post("/add", {name: album.name})
    .success(function (data) {
      $scope.playlist = data;
    });
  };
})