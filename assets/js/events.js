btnChooseMode.addEventListener('click', function () {
    const valueUserName = document.querySelector('input').value;
    gameCurrent.username = valueUserName;
    gameCurrent.puntuation = 'Playing';
    saveUserName();
    showAllUsers();
    btnChooseMode.href = '#modePage';
});

btnBabyMode.addEventListener('click', function () {
    btnBabyMode.href = '#gamePage';
    chooseDifficult('baby');
    startGame();
});

btnMediumMode.addEventListener('click', function () {
    btnBabyMode.href = '#gamePage';
    chooseDifficult('medium');
    startGame();
});

btnHardMode.addEventListener('click', function () {
    btnBabyMode.href = '#gamePage';
    chooseDifficult('hard');
    startGame();
});