btnChooseMode.addEventListener('click', function () {
    const valueUserName = document.querySelector('input').value;
    gameCurrent.username = valueUserName;
    gameCurrent.puntuation = 'Playing ...';
    saveUserName();
    showAllUsers();
    btnChooseMode.href = '#modePage';
});

btnBabyMode.addEventListener('click', function () {
    gameCurrent.puntuation = 'Playing ...';
    btnBabyMode.href = '#gamePage';
    chooseDifficult('baby');
    startGame();
});

btnMediumMode.addEventListener('click', function () {
    gameCurrent.puntuation = 'Playing ...';
    btnMediumMode.href = '#gamePage';
    chooseDifficult('medium');
    startGame();
});

btnHardMode.addEventListener('click', function () {
    gameCurrent.puntuation = 'Playing ...';
    btnHardMode.href = '#gamePage';
    chooseDifficult('hard');
    startGame();
});

btnReset.addEventListener('click', function () {
    window.location.reload();
    window.scrollTo(0, 0);
});

btnClear.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
})