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



document.body.onkeydown = function frame(e) {
var framerate = setInterval(frame, 5);
    if (e.keyCode === 65 && Player1.pos > -10) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (e.keyCode === 37 && Player1.pos > -10) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (e.keyCode === 68 && Player1.pos < 780) {
        Player1.pos = Player1.pos + Player1.speed;
    }
    if (e.keyCode === 39 && Player1.pos < 780) {
        Player1.pos = Player1.pos + Player1.speed;
    }

    Player1.move();
    clearInterval(framerate);
};
