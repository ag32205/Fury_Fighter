function Player(pos, speed, controlset, id) {
    this.pos = pos;
    this.speed = speed;
    this.controlset = controlset;
    this.id = id;
    var ypos = 570;
    var fighter = document.getElementById(this.id);
    var position = this.pos;
    this.move = function (e) {
        if (e.keyCode === 65) {
            position = position - speed;
        }
        if (e.keyCode === 37) {
            position = position - speed;
        }
        return position;
    }
    fighter.style.left = position + 'px';
    fighter.style.top = ypos + 'px';
}

var Player1 = new Player(400, 25, 1, 'player1');

document.body.onkeydown = Player1.move(e);
