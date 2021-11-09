const gameCurrent = {
    'username': '',
    'puntuation': ''
}
var allUsers = [];

 //Lista de imgs
var availablesImgs = [
    [
        '/assets/img/ahmer-kalam-ye9dfyrlJ7Y-unsplash.jpg',
        '/assets/img/dulana-kodithuwakku-VH23jkS_ods-unsplash.jpg',
        '/assets/img/grace-nandy-x12SorTRAW8-unsplash.jpg',
        '/assets/img/ibrahim-uzun-BNDF1KVYL3k-unsplash.jpg',
        '/assets/img/peter-neumann-xFs5m1RLPRk-unsplash.jpg',
        '/assets/img/photo-1635866869385-fabb68f0dea0.jpg',
        '/assets/img/rod-long-BSz0jJ172vM-unsplash.jpg'
    ],
    [
        '/assets/img/rod-long-BSz0jJ172vM-unsplash.jpg',
        '/assets/img/photo-1635866869385-fabb68f0dea0.jpg',
        '/assets/img/peter-neumann-xFs5m1RLPRk-unsplash.jpg',
        '/assets/img/grace-nandy-x12SorTRAW8-unsplash.jpg',
        '/assets/img/dulana-kodithuwakku-VH23jkS_ods-unsplash.jpg',
        '/assets/img/ahmer-kalam-ye9dfyrlJ7Y-unsplash.jpg',
        '/assets/img/ibrahim-uzun-BNDF1KVYL3k-unsplash.jpg',
    ],
];

var orderForThisRound = [];

//Ver si puede jugar
var canPlay = false;

//Cartas seleccionadas
var card1 = null;
var card2 = null;

//Elegir tipo de dificultad
var mode = null;

//Etiquetas del tablero
var cards = null;