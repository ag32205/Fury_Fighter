document.body.onkeydown = function (e) {
    if (e.keyCode === 65) {
        var player1 = document.getElementById('player1');
        var width = new String(player1.style.width.valueOf);
        player1.style.width = (width.slice(1, 3) - 25) + 'px';
    }
}
