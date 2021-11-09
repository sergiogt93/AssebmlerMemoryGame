const scoreBox = document.querySelectorAll('.scoreBox');
const btnChooseMode = document.querySelector('#startGame');
const btnBabyMode = document.querySelector('#babyMode');
const btnMediumMode = document.querySelector('#mediumMode');
const btnHardMode = document.querySelector('#hardMode');

function clearChilds() {
    let allChilds = Array.from(document.querySelectorAll('.scoreData'));
    for (const iterator of allChilds) {
        iterator.remove();
    }
}

function showAllUsers() {
    scoreBox.forEach(box => {
        clearChilds(box);
        allUsers.forEach(historic => {
            let currentUser = document.createElement('p');
            currentUser.innerHTML = historic.username;
            currentUser.classList.add('scoreData');
            let currentPuntuation = document.createElement('p');
            currentPuntuation.innerHTML = historic.puntuation;
            box.appendChild(currentUser, currentPuntuation);
            currentPuntuation.classList.add('scoreData');
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