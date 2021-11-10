function chooseDifficult(difficult) {
    mode = difficult;
    switch (difficult) {
        case 'baby':
            vidas = 5;
            document.getElementById('imgLives').src = '/assets/img/dibujos-animados-bebe-durmiendo_61878-356.jpeg';
            setNewOrderBaby();
            break;
        case 'medium':
            vidas = 5;
            document.getElementById('imgLives').src = livesImg[4];
            setNewOrder();
            break;
        case 'hard':
            vidas = 2;
            document.getElementById('imgLives').src = livesImg[1];
            setNewOrder();
            break;
    }
}

function startGame() {
    currentScore = 100;
    timer = setInterval(() => {
        console.log('a');
        currentScore--;
        allUsers = JSON.parse(localStorage.getItem('allUsers'));
        allUsers[allUsers.length - 1].puntuation = gameCurrent.puntuation;
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
        allUsers = JSON.parse(localStorage.getItem('allUsers'));
        saveCurrentScore();
    }, 1000);
    //Número de pares encontrados
    foundPairs = 0;
    MAX_PAIR_NUMBER = orderForThisRound.length / 2;
    setImgsInCards();
    cards = document.querySelectorAll('#gameBox img');
    openCards();
    canPlay = true;
}

//Barajar las imagenes de baby
function setNewOrderBaby() {
    const posRandom = Math.floor(Math.random() * availablesImgs.length);
    const card = Math.floor(Math.random() * availablesImgs[posRandom].length);
    for (let index = 0; index < availablesImgs[posRandom].length * 2; index++) {
        orderForThisRound.push(availablesImgs[posRandom][card]);
    }
}

//Barajar las imagenes de medio y dificil
function setNewOrder() {
    const posRandom = Math.floor(Math.random() * availablesImgs.length);
    orderForThisRound = availablesImgs[posRandom].concat(availablesImgs[posRandom]);
    orderForThisRound.sort(() => Math.random() - 0.5);
}

//Rellenar tablero
function setImgsInCards() {
    for (let index = 0; index < orderForThisRound.length; index++) {
        const newImg = document.createElement('img');
        const imgA = document.createElement('a');
        imgA.appendChild(newImg);
        newImg.src = orderForThisRound[index];
        document.getElementById('gameBox').appendChild(imgA);
    }
}

//Abrir todas las tarjetas
function openCards() {
    cards.forEach(card => {
        card.classList.remove('close');
        card.classList.add('open')
    });
    setTimeout(() => {
        closeCards();
    }, 6000);
}

//Cerrar todas las tarjetas
function closeCards() {
    cards.forEach(card => {
        card.classList.remove('open')
        card.classList.add('close')
    });
    addClickEvents();
}

//Añadir eventos de click a todas las imagenes
function addClickEvents() {
    cards.forEach(card => card.addEventListener('click', flipCard));
}

//Quitar eventos de click a todas las imagenes
function removeClickEvents() {
    cards.forEach(card => card.removeEventListener("click", flipCard));
}

//Seleccionado una imagen
function flipCard(e) {
    const clickedCard = e.target;
    if (canPlay && !clickedCard.classList.contains('open')) {
        clickedCard.classList.remove('close');
        clickedCard.classList.add('open');
        checkPair(clickedCard);
    }
}

//Limpiar las dos imagenes abiertas
function resetOpenedCarts() {
    setTimeout(() => {
        card1.classList.remove("open");
        card1.classList.add("close");
        card2.classList.remove("open");
        card2.classList.add("close");

        card1 = null;
        card2 = null;

        canPlay = true;
    }, 1000);

}

//Revisar la pareja
function checkPair(image) {
    if (!card1) card1 = image;
    else card2 = image;

    if (mode == 'hard') {
        if (card1 && card2) {
            if (card1.src === card2.src) {
                canPlay = true;
                checkIfWon();
            } else {
                vidas--
                if (vidas > 0) {
                    document.getElementById('imgLives').src = livesImg[0];
                    resetOpenedCarts();
                } else {
                    canPlay = false;
                    document.getElementById('msgEndGame').innerHTML = '😞 GAME OVER - TRY AGAIN 😞';
                    endview.scrollIntoView();
                    clearInterval(timer);
                    currentScore = 0;
                    allUsers = JSON.parse(localStorage.getItem('allUsers'));
                    allUsers[allUsers.length - 1].puntuation = gameCurrent.puntuation;
                    localStorage.setItem('allUsers', JSON.stringify(allUsers));
                    allUsers = JSON.parse(localStorage.getItem('allUsers'));
                    saveCurrentScore();
                }
            }
        }
    } else {
        if (card1 && card2) {
            if (card1.src === card2.src) {
                canPlay = true;
                checkIfWon();
            } else {
                vidas--
                switch (vidas) {
                    case 0:
                        canPlay = false;
                        document.getElementById('msgEndGame').innerHTML = '😞 GAME OVER - TRY AGAIN 😞';
                        endview.scrollIntoView();
                        clearInterval(timer);
                        currentScore = 0;
                        allUsers = JSON.parse(localStorage.getItem('allUsers'));
                        allUsers[allUsers.length - 1].puntuation = gameCurrent.puntuation;
                        localStorage.setItem('allUsers', JSON.stringify(allUsers));
                        allUsers = JSON.parse(localStorage.getItem('allUsers'));
                        saveCurrentScore();
                    case 1:
                        document.getElementById('imgLives').src = livesImg[0];
                        break;
                    case 2:
                        document.getElementById('imgLives').src = livesImg[1];
                        break;
                    case 3:
                        document.getElementById('imgLives').src = livesImg[2];
                        break;
                    case 4:
                        document.getElementById('imgLives').src = livesImg[3];
                        break;
                }
                resetOpenedCarts();
            }
        }
    }
}

//Revisar si ha ganado
function checkIfWon() {
    foundPairs++;
    if (MAX_PAIR_NUMBER === foundPairs) {
        document.getElementById('msgEndGame').innerHTML = '🥳 CONGRATULATIONS YOU WIN!! 🥳';
        endview.scrollIntoView();
        saveFinalScore();
        clearInterval(timer);
        /* setNewGame(); */
    } else {
        card1 = null;
        card2 = null;
        canPlay = true;
    }
}

// //Reiniciar el juego
function setNewGame() {
    card1 = null;
    card2 = null;
    canPlay = true;
    removeClickEvents();
    cards.forEach(card => card.classList.remove("open"));
    setTimeout(startGame(), 1000);
}

// Score Ranking

function scoreRanking() {
    if (allUsers) {
        const scoreSort = allUsers.sort((a, b) => b.puntuation - a.puntuation);
        const divRankings = document.querySelectorAll('.ranking');

        divRankings.forEach(elementParent => {
            scoreSort.forEach(element => {
                let scoreP = document.createElement('p');
                scoreP.innerHTML = 'Player: ' + element.username + '<br> Puntuation: ' + element.puntuation;
                elementParent.appendChild(scoreP);
            });
        });
    }
}