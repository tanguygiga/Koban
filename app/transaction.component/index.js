import template from './transactions.html';

class controller {

  constructor( $routeParams, $location, TransactionService ) {

    this.TransactionService = TransactionService;
    this.$location = $location;
    this.TransactionService.getAll()
      .then( transactions => this.transactions = transactions );

  }

  update( transactionForm ) {
    if ( transactionForm.$valid ) {
      TransactionService.push( this.transaction )
        .then( transaction => this.transactions.push( transaction ) )
        .then( () => this.$location.path( '/transactions' ) );
      this.transaction = null;
      transactionForm.$setPristine();
      transactionForm.$setUntouched();
    }
  }

  delete( transaction ) {
    TransactionService.delete( transaction )
      .catch( () => {
        console.log( 'ERREUR DE SUPPRESSION' );
        this.transactions.push( transaction );
      } )
    this.transactions = this.transactions.filter( u => u.id !== transaction.id );
  }

  update( transaction ) {
    this.transaction = angular.copy( transaction );
  }

}

export const TransactionComponent = {
  bindings: {

  },
  template,
  controller,
}
