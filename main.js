var r1 = Math.floor(Math.random() * 6 + 1);
var r2 = Math.floor(Math.random() * 6 + 1);
function player1() {
    document.getElementById("demo").innerHTML = 'player1-' + '  ' + r1;
};
function player2() {
    document.getElementById("demo2").innerHTML = 'player2-' + '  ' + r2;
};
