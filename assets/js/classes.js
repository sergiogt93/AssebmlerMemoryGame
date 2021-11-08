class Game {
    constructor(difficult) {
        //Ver si puede jugar
        this.canPlay = false;

        //Cartas seleccionadas
        this.card1 = null;
        this.card2 = null;

        //Elegir tipo de dificultad
        this.difficult = null;

        //Lista de imgs desordenadas
        this.orderForThisRound = new CollectionImgs(difficult).orderForThisRound;


        //Máximo de parejas
        this.maxPairNumber = this.orderForThisRound.length / 2;

        this.startGame();

        // //Etiquetas del tablero
        this.cards = null;
    }

    //Comenzar juego
    startGame() {
        this.foundPairs = 0;
        this.setImgsInCards();
        this.cards = Array.from(document.querySelectorAll('#gameBox img'));
        this.openCards();
    }

    //Rellenar tablero
    setImgsInCards() {
        for (let index = 0; index < this.orderForThisRound.length; index++) {
            const newImg = document.createElement('img');
            newImg.src = this.orderForThisRound[index];
            document.getElementById('gameBox').appendChild(newImg);
        }
    }

    //Abrir todas las tarjetas
    openCards() {
        console.log(this.cards);
        for (const iterator of this.cards) {
            iterator.classList.add('open')
        }
        console.log(this.cards);
        console.log('before');
        setTimeout(() => {
            this.closeCards();
            console.log('after');
        }, 3000);
    }

    //Cerrar todas las tarjetas
    closeCards() {
        for (const iterator of this.cards) {
            iterator.classList.remove('open')
            iterator.classList.add('close')
        }
        /*         this.cards.forEach(card => card.classList.remove('open'));
                this.cards.forEach(card => card.classList.add('close')); */
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
                if (this.difficult === 'hard') {
                    this.setNewGame();
                }
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
    constructor(difficult) {
        //Lista de imgs
        this.availablesImgs = [
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
                '/assets/img/rod-long-BSz0jJ172vM-unsplash.jpg'
            ],
        ];
        this.orderForThisRound = [];
        this.chooseDifficult(difficult);
    }

    chooseDifficult(difficult) {
        switch (difficult) {
            case 'baby':
                this.setNewOrderBaby();
                break;
            case 'medium':
            case 'hard':
                this.setNewOrder();
                break;
        }
    }

    //Barajar las imagenes de baby
    setNewOrderBaby() {
        const posRandom = Math.floor(Math.random() * this.availablesImgs.length);
        this.selectedImgs = this.availablesImgs[posRandom];
        const card = Math.floor(Math.random() * this.availablesImgs[posRandom].length);
        for (let index = 0; index < this.availablesImgs[posRandom].length * 2; index++) {
            this.orderForThisRound.push(this.availablesImgs[posRandom][card]);
        }
    }

    //Barajar las imagenes de medio y dificil
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