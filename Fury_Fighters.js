function Player(pos, speed, controlset, id) {
    this.pos = pos;
    this.speed = speed;
    this.controlset = controlset;
    this.id = id;
    var ypos = 570;
    var fighter = document.getElementById(this.id );
    var position =  this.pos;
    this.move = document.body.onkeydown = function (e) {
            if (e.keyCode === 65 && this.controlset == 1) {
                position = position - speed;
            }
        if (e.keyCode === 37 && this.controlset == 2) {
                position = position - speed;
            }
            return position;
    }
    fighter.style.left = position + 'px';
    fighter.style.top = ypos;
}

var Player1 = new Player(400, 25, 1, 'player1');



