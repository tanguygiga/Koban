export function routes($routeProvider) {
    $routeProvider

    .when('/', {
        template: '<home></home>'
    })

    .when('/inscription', {
            template: '<inscription></inscription>',
    })
    
    .when('/connexion', {
            template: '<connexion></connexion>',
    })

    .when('/pizzas', {
        template: '<liste-pizzas></liste-pizzas>'
    })

    .when('/commande', {
        template: '<commande></commande>'
    })

    .when('/panier', {
        template: '<panier></panier>'
    })

    .when('/compte', {
        template: '<mon-compte></mon-compte>'
    })

    .otherwise({
        redirectTo: '/'
    })
}