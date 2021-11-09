const scoreBox = document.querySelectorAll('.scoreBox');
const btnChooseMode = document.querySelector('#startGame');
const btnBabyMode = document.querySelector('#babyMode');
const btnMediumMode = document.querySelector('#mediumMode');
const btnHardMode = document.querySelector('#hardMode');
const endview = document.getElementById('endPage');
const btnClear = document.getElementById('resetCookies');
const btnReset = document.getElementById('resetGame');

function clearChilds() {
    let allChilds = Array.from(document.querySelectorAll('.scoreData'));
    for (const iterator of allChilds) {
        iterator.remove();
    }
}

function showAllUsers() {
    //console.log(scoreBox);
    scoreBox.forEach(box => {
        clearChilds();
        allUsers.forEach(historic => {
            let currentUser = document.createElement('p');
            currentUser.innerHTML = `Player: <b>${historic.username}</b>,<br> Score: <b>${historic.puntuation}</b> `;
            currentUser.classList.add('scoreData');
            box.appendChild(currentUser);
        });
    });
}

function saveUserName() {
    if (localStorage.getItem('allUsers')) {
        allUsers = JSON.parse(localStorage.getItem('allUsers'));
        allUsers.push(gameCurrent);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    } else {
        allUsers.push(gameCurrent);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
    }
}

function finalScore() {
    scoreBox.forEach(box => {
        console.log(box.lastChild);
        box.lastChild.remove();
        clearChilds(allUsers);
        allUsers.forEach(historic => {
            let currentUser = document.createElement('p');
            currentUser.innerHTML = `Player: <b>${historic.username}</b>,<br> Score: <b>${finalScore}</b> `;
            currentUser.classList.add('scoreData');
            box.appendChild(currentUser);
        });
    });
}