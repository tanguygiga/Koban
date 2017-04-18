export class TransactionService {

  constructor( $http, API_URL ) {
    this.$http = $http;
    this.API_URL = API_URL;
  }

  getAll() {
    return this.$http.get( this.API_URL )
      .then( response => response.data );
  }

  push( transaction ) {
    return ( ( transaction.id ) ? put( transaction ) : post( transaction ) );
  }

  delete( transaction ) {
    return this.$http.delete( `${this.API_URL}/${ transaction.id }` )
      .then( response => response.data );
  }

  put( transaction ) {
    this.$http.put( `${this.API_URL}/${ transaction.id }`, transaction )
      .then( response => response.data );
  }

  post( transaction ) {
    this.$http.post( this.API_URL, transaction )
      .then( response => response.data );
  }

}
