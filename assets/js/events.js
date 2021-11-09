btnChooseMode.addEventListener('click', function () {
    const valueUserName = document.querySelector('input').value;
    gameCurrent.username = valueUserName;
    gameCurrent.puntuation = 'Playing ...';
    saveUserName();
    showAllUsers();
    btnChooseMode.href = '#modePage';
    btnChooseMode.removeEventListener('click', function () {});
});

btnBabyMode.addEventListener('click', function () {
    btnBabyMode.href = '#gifPage';
    document.getElementsByTagName('body')[0].classList.add('gifBody');
    document.getElementById('gifDiv').classList.add('gifEasy');
    setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.remove('gifBodyEasy');
        document.getElementsByTagName('body')[0].classList.add('bodyBaby');
        gamePageView.scrollIntoView();
        chooseDifficult('baby');
        startGame();
    }, 3000);
    btnBabyMode.removeEventListener('click', function () {});
});

btnMediumMode.addEventListener('click', function () {
    btnMediumMode.href = '#gifPage';
    document.getElementsByTagName('body')[0].classList.add('gifBody');
    document.getElementById('gifDiv').classList.add('gifMedium');
    setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.remove('gifBody');
        gamePageView.scrollIntoView();
        chooseDifficult('medium');
        startGame();
    }, 3000);
    btnMediumMode.removeEventListener('click', function () {});
});

btnHardMode.addEventListener('click', function () {
    btnHardMode.href = '#gifPage';
    document.getElementsByTagName('body')[0].classList.add('gifBody');
    document.getElementById('gifDiv').classList.add('gifHard');
    setTimeout(() => {
        document.getElementsByTagName('body')[0].classList.remove('gifBody');
        document.getElementsByTagName('body')[0].classList.add('bodyHard');
        gamePageView.scrollIntoView();
        chooseDifficult('hard');
        startGame();
    }, 3000);
    btnHardMode.removeEventListener('click', function () {});
});

btnReset.addEventListener('click', function () {
    window.location.reload();
    window.scrollTo(0, 0);
});

btnClear.addEventListener('click', function () {
    localStorage.clear();
    window.location.reload();
})