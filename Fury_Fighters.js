function Player(pos, speed, controlset, id) {
    this.pos = pos;
    this.speed = speed;
    this.controlset = controlset;
    this.id = id;
    var ypos = 570;
    var fighter = document.getElementById(this.id);
    var position = this.pos;

    fighter.style.left = position + 'px';
    fighter.style.top = ypos + 'px';
}

var Player1 = new Player(400, 25, 1, 'player1');


document.Player1.onkeydown = function (e) {
        if (e.keyCode === 65) {
            Player1.pos = Player1.pos - Player1.speed;
        }
        if (e.keyCode === 37) {
            position = position - Player1.speed;
        }
      return position;
    };
