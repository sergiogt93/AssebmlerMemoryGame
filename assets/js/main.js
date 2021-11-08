var game = null;
var statics = null;

window.addEventListener('DOMContentLoaded', function() {
    game = new Game();
    statics = new Statistics('sergio');
    console.log(game);
    console.log(statics);
});