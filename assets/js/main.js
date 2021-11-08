var game = null;
var statics = null;

const scoreBox = document.querySelectorAll('.scoreBox');
const btnChooseMode = document.querySelector('#startGame');


btnChooseMode.addEventListener('click', function () {
    const ValueUserName = document.querySelector('input').value;
    game = new Game();
    statics = new Statistics(ValueUserName);
    showAllUsers();
    /* tnChooseMode.href */
});

function clearChilds(box) {
    let allChilds = box.querySelectorAll('p');
    while (allChilds.firstChild) {
        allChilds.removeChild(allChilds.firstChild);
    }
}

function showAllUsers() {
    scoreBox.forEach(box => {
        clearChilds(box);
        statics.allUsers.forEach(historic => {
            let currentUser = document.createElement('p');
            currentUser.innerHTML = historic.username;
            let currentPuntuation = document.createElement('p');
            currentPuntuation.innerHTML = historic.puntuation;
            box.appendChild(currentUser, currentPuntuation);
        });
    });
}