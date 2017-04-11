import angular from 'angular';
import {
  TransactionService
} from './service/transaction.service';
import {
  TransactionController
} from './controller/transaction.controller';

export const TransactionModule = angular.module( 'transaction.module', [] )

  .value( 'API_URL', 'http://localhost:3000/transaction' )
  .service( 'TransactionService', TransactionService )
  .controller( 'TransactionController', TransactionController )

  .name;
