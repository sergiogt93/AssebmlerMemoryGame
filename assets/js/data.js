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
        '/assets/img/rod-long-BSz0jJ172vM-unsplash.jpg',
        '/assets/img/mark-stoop-JAUFHzqZPd0-unsplash.jpg'
    ],
    [
        '/assets/img/david-clode-djswadct1ps-unsplash.jpg',
        '/assets/img/hans-jurgen-mager-qQWV91TTBrE-unsplash.jpg',
        '/assets/img/nick-karvounis--KNNQqX9rqY-unsplash.jpg',
        '/assets/img/philip-swinburn-Z0tTnl_eOIo-unsplash.jpg',
        '/assets/img/ray-hennessy-xUUZcpQlqpM-unsplash.jpg',
        '/assets/img/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg',
        '/assets/img/sid-balachandran-_9a-3NO5KJE-unsplash.jpg',
        '/assets/img/vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg'
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

//Puntuación

var finalScore = 100;