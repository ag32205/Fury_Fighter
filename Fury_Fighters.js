function Player(pos, speed, controlset, id) {
    this.pos = pos;
    this.speed = speed;
    this.controlset = controlset;
    this.id = id;
    var ypos = 570;
    var fighter = document.getElementById(this.id);

    this.move = function () {
        fighter.style.left = this.pos + 'px';
        fighter.style.top = ypos + 'px';
    }
    fighter.style.left = this.pos + 'px';
    fighter.style.top = ypos + 'px';
}

var Player1 = new Player(400, 5, 1, 'player1');


Player1.onkeypress = function (e) {
    if (e.keyCode === 65) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (e.keyCode === 37) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    Player1.move();
};
