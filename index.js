class TransactionService {

  constructor( $http, API_URL ) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  getTransactions() {
    return this.$http.get( this.API_URL )
      .then( response => response.data );
  }

  saveUser( transaction ) {
    return ( transaction.id ) ?
      this.$http.put( `${this.API_URL}/${ transaction.id }`, transaction ) :
      this.$http.post( this.API_URL, transaction )

      .then( response => response.data );

  }

  deleteTransaction( transaction ) {
    return this.$http.delete( `${this.API_URL}/${ transaction.id }` )
      .then( response => response.data );
  }

}

angular.module( 'app', [] )

  .constant( 'API_URL', 'http://localhost:3000/transaction' )

  .service( 'TransactionService', TransactionService )

  .controller( 'Controller', function ( TransactionService ) {

    TransactionService.getTransactions()
      .then( transactions => this.transactions = transactions );

    this.save = ( transactionForm ) => {
      if ( transactionForm.$valid ) {

        TransactionService.saveUser( this.transaction )
          .then( transaction => this.transactions.push( transaction ) )

        this.transaction = null;
        transactionForm.$setPristine();
        transactionForm.$setUntouched();
      }
    }

    this.deleteTransaction = ( transaction ) => {
      TransactionService.deleteTransaction( transaction )
        .catch( () => {
          console.log( 'ERREUR DE SUPPRESSION' );
          this.transactions.push( transaction );
        } )
      this.transactions = this.transactions.filter( u => u.id !== transaction.id );
    }

    this.editTransaction = ( transaction ) => {
      this.transaction = angular.copy( transaction );
    }

  } );
