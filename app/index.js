import angular from 'angular';
import ngRoute from 'angular-route';

import {
  TransactionComponent
}
from './transaction.component';
import {
  TransactionService
}
from './transaction.service';

angular.module( 'app', [
    ngRoute
  ] )
  .value( 'API_URL', 'http://localhost:3000/transactions' )
  .service( 'TransactionService', TransactionService )

.component( 'koTransaction', TransactionComponent );
