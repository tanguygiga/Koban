export class TransactionController {

  constructor( TransactionService, $routeParams, $location, ) {

    this.TransactionService = TransactionService;
    this.$location = $location;
    this.TransactionService.readAll()
      .then( transactions => this.transactions = transactions );

  }

  update( transactionForm ) {
    if ( transactionForm.$valid ) {

      TransactionService.push( this.transaction )
        .then( transaction => this.transactions.push( transaction ) )
        .then( () => this.$location.path( '/transactions' ) )

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
