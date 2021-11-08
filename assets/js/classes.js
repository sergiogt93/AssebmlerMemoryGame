class Game {
    constructor() {
        //Ver si puede jugar
        this.canPlay = false;

        //Cartas seleccionadas
        this.card1 = null;
        this.card2 = null;

        //Lista de imgs desordenadas
        this.orderForThisRound = new CollectionImgs().orderForThisRound;

        // //Etiquetas del tablero
        // this.cards = Array.from(document.getE);

        //Máximo de parejas
        this.maxPairNumber = this.orderForThisRound.length / 2;

        this.startGame();
    }

    //Comenzar juego
    startGame() {
        this.foundPairs = 0;
        this.setImgsInCards();
        // this.openCards();
    }

    //Rellenar tablero
    setImgsInCards() {
        for (let index = 0; index < this.orderForThisRound.length; index++) {
            const newImg = document.createElement('img');
            newImg.src = '/assets/img/caja-sorpresa.png';
            document.getElementById('gameBox').appendChild(newImg);
        }
    }

    //Abrir todas las tarjetas
    openCards() {
        this.cards.forEach(card => card.classList.add('opened'));
        setTimeout(() => {
            this.closeCards();
        }, 3000);
    }

    //Cerrar todas las tarjetas
    openCards() {
        this.cards.forEach(card => card.classList.add('removed'));
        this.addClickEvents();
        this.canPlay = true;
    }

    //Añadir eventos de click a todas las imagenes
    addClickEvents() {
        this.cards.forEach(card => card.addEventListener('click', this.flipCard));
    }

    //Quitar eventos de click a todas las imagenes
    removeClickEvents() {
        this.cards.forEach(card => card.removeEventListener("click", this.flipCard));
    }

    //Seleccionado una imagen
    flipCard(e) {
        const clickedCard = e.target;

        if (this.canPlay && !clickedCard.classList.contains('opened')) {
            clickedCard.classList.contains('opened')
            this.checkPair(clickedCard.dataset.img);
        }
    }

    //Revisar la pareja
    checkPair(image) {
        if (!this.card1) this.card1 = image;
        else this.card2 = image;

        if (this.card1 && this.card2) {
            if (this.card1 === this.card2) {
                this.canPlay = true;
                this.checkIfWon();
            } else {
                this.canPlay = false;
                setTimeout(this.resetOpenedCards.bind(this), 800)
            }
        }
    }

    //Limpiar las dos imagenes abiertas
    resetOpenedCarts() {
        //const firstOpened = document.querySelector('memoryGame')
        //const secondOpened = document.querySelector('memoryGame')
        firstOpened.classList.remove("opened");
        secondOpened.classList.remove("opened");

        this.card1 = null;
        this.card2 = null;

        this.canPlay = true;
    }

    //Revisar si ha ganado
    checkIfWon() {
        this.foundPairs++;

        this.card1 = null;
        this.card2 = null;
        this.canPlay = true;

        if (this.maxPairNumber === this.foundPairs) this.setNewGame();
    }

    //Reiniciar el juego
    setNewGame() {
        this.removeClickEvents();
        this.cards.forEach(card => card.classList.remove("opened"));
        setTimeout(this.startGame.bind(this), 1000);
    }
}

class CollectionImgs {
    constructor() {
        //Lista de imgs
        this.availablesImgs = [
            [
                'ahmer-kalam-ye9dfyrlJ7Y-unsplash.jpg',
                'dulana-kodithuwakku-VH23jkS_ods-unsplash.jpg',
                'grace-nandy-x12SorTRAW8-unsplash.jpg',
                'ibrahim-uzun-BNDF1KVYL3k-unsplash.jpg',
                'peter-neumann-xFs5m1RLPRk-unsplash.jpg',
                'photo-1635866869385-fabb68f0dea0.jpg',
                'rod-long-BSz0jJ172vM-unsplash.jpg'
            ],
            [
                'rod-long-BSz0jJ172vM-unsplash.jpg',
                'photo-1635866869385-fabb68f0dea0.jpg',
                'peter-neumann-xFs5m1RLPRk-unsplash.jpg',
                'grace-nandy-x12SorTRAW8-unsplash.jpg',
                'dulana-kodithuwakku-VH23jkS_ods-unsplash.jpg',
                'ahmer-kalam-ye9dfyrlJ7Y-unsplash.jpg',
                'ibrahim-uzun-BNDF1KVYL3k-unsplash.jpg',
                'rod-long-BSz0jJ172vM-unsplash.jpg'
            ],
        ];
        this.orderForThisRound = [];
        this.setNewOrder();
    }

    //Barajar las imagenes
    setNewOrder() {
        const posRandom = Math.floor(Math.random() * this.availablesImgs.length);
        this.selectedImgs = this.availablesImgs[posRandom];
        this.orderForThisRound = this.selectedImgs.concat(this.selectedImgs);
        this.orderForThisRound.sort(() => Math.random() - 0.5);
    }
}

class Statistics {
    constructor(username = '', puntuation = 'Currently playing') {
        this.gameCurrent = {
            'username': username,
            'puntuation': puntuation
        }
        this.allUsers = [];
        this.saveUserName();
    }

    saveUserName() {
        if (localStorage.getItem('allUsers')) {
            this.allUsers = JSON.parse(localStorage.getItem('allUsers'));
            this.allUsers.push(this.gameCurrent);
            localStorage.setItem('allUsers', JSON.stringify(this.allUsers));
        } else {
            this.allUsers.push(this.gameCurrent);
            localStorage.setItem('allUsers', JSON.stringify(this.allUsers));
        }
    }
}