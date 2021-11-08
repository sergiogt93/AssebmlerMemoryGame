var game = null;
var statics = null;

const scoreBox = document.querySelectorAll('.scoreBox');
const btnChooseMode = document.querySelector('#startGame');
const btnBabyMode = document.querySelector('#babyMode');
const btnMediumMode = document.querySelector('#mediumMode');
const btnHardMode = document.querySelector('#hardMode');

btnChooseMode.addEventListener('click', function () {
    const ValueUserName = document.querySelector('input').value;
    statics = new Statistics(ValueUserName);
    showAllUsers();
    btnChooseMode.href = '#modePage';
});

btnBabyMode.addEventListener('click', function () {
    game = new Game('baby');
    console.log('Baby', game);
});

btnMediumMode.addEventListener('click', function () {
    game = new Game('medium');
    console.log('medium', game);
});

btnHardMode.addEventListener('click', function () {
    game = new Game('hard');
    console.log('hard', game);
});

function clearChilds() {
    let allChilds = Array.from(document.querySelectorAll('.scoreData'));
    for (const iterator of allChilds) {
        iterator.remove();
    }
}

function showAllUsers() {
    scoreBox.forEach(box => {
        clearChilds(box);
        statics.allUsers.forEach(historic => {
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