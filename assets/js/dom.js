const scoreBox = document.querySelectorAll('.scoreBox');
const btnChooseMode = document.querySelector('#startGame');
const btnBabyMode = document.querySelector('#babyMode');
const btnMediumMode = document.querySelector('#mediumMode');
const btnHardMode = document.querySelector('#hardMode');
const endview = document.getElementById('endPage');
const btnClear = document.getElementById('resetCookies');
const btnReset = document.getElementById('resetGame');
const gamePageView = document.getElementById('gamePage');

function clearChilds() {
    let allChilds = Array.from(document.querySelectorAll('.scoreData'));
    for (const iterator of allChilds) {
        iterator.remove();
    }
}

function showAllUsers() {
    //console.log(scoreBox);
    scoreBox.forEach(box => {
        /*         clearChilds();
         */
        allUsers.forEach(historic => {
            console.log(allUsers);
            let currentUser = document.createElement('p');
            currentUser.innerHTML = `Player: <b>${historic.username}</b> <br> Score: <b>${historic.puntuation}</b> `;
            currentUser.classList.add('scoreData');
            box.appendChild(currentUser);
        });
    });
}

function saveUserName() {
    if (vidas === 0) {
        allUsers.pop();
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    } else {
        if (localStorage.getItem('allUsers')) {
            allUsers = JSON.parse(localStorage.getItem('allUsers'));
            allUsers.push(gameCurrent);
            localStorage.setItem('allUsers', JSON.stringify(allUsers));
        } else {
            allUsers = [];
            allUsers.push(gameCurrent);
            localStorage.setItem('allUsers', JSON.stringify(allUsers));
        }
        allUsers = JSON.parse(localStorage.getItem('allUsers'));
    };
}

function saveFinalScore() {
    scoreBox.forEach(box => {
        box.lastChild.remove();
        let currentUser = document.createElement('p');
        const finalScore = currentScore;
        gameCurrent.puntuation = finalScore;
        currentUser.innerHTML = `Player: <b>${gameCurrent.username}</b> <br> Score: <b>${gameCurrent.puntuation}</b> `;
        currentUser.classList.add('scoreData');
        box.appendChild(currentUser);
    });
}

function saveCurrentScore() {
    scoreBox.forEach(box => {
        box.lastChild.remove();
        let currentUser = document.createElement('p');
        gameCurrent.puntuation = currentScore;
        currentUser.innerHTML = `Player: <b>${gameCurrent.username}</b> <br> Score: <b>${gameCurrent.puntuation}</b> `;
        currentUser.classList.add('scoreData');
        box.appendChild(currentUser);
    });
}