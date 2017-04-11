import angular from 'angular';
import ngRoute from 'angular-route';
import {
  TransactionModule
} from './transaction';

angular.module( 'app', [
    TransactionModule,
    ngRoute
  ] )
  .config( function ( $locationProvider, $routeProvider ) {

    $locationProvider.html5Mode( true );

    $routeProvider
      .when( '/transactions', {
        templateUrl: 'views/transactions.html',
        controller: 'TransactionController',
        controllerAs: 'ctrl'
      } )
      .when( '/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html',
        controllerAs: 'ctrl'
      } )
      .otherwise( {
        redirectTo: '/'
      } );
  } )
  .controller( 'HomeController', function () {
    this.name = 'Koban';
  } )
