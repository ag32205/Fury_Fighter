
function Player(pos, speed, controlset, id) {
    this.pos = pos;
    this.speed = speed;
    this.controlset = controlset;
    this.id = id;
    this.ypos = 570;
    var fighter = document.getElementById(this.id);

    this.move = function () {
        fighter.style.left = this.pos + 'px';
        fighter.style.top = this.ypos + 'px';
    };

    fighter.style.left = this.pos + 'px';
    fighter.style.top = this.ypos + 'px';
}

function Keyset(left, right, up) {
    this.left = left;
    this.right = right;
    this.up = up;
    this.moving = Boolean;
}

var keys = new Keyset(37, 39, 87);

var Player1 = new Player(400, 2, 1, 'player1');
var iskeydown = Boolean;


function run() {
    if (keys.moving === true){
    if (keys.left === true && Player1.pos > -10) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (keys.right === true && Player1.pos > -10) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (keys.right === true && Player1.pos < 780) {
        Player1.pos = Player1.pos + Player1.speed;
    }
    if (keys.right === true&& Player1.pos < 780) {
        Player1.pos = Player1.pos + Player1.speed;
    }
      Player1.move();
    }

}
var framerate = setInterval(run, 1);

document.body.onkeydown = function frame(e) {
    keys.moving = true;

    if (e.keyCode === 65) {
        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === 37) {
        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === 68) {
        keys.right = true;
        keys.left = false;
    }
    if (e.keyCode === 39) {
        keys.right = true;
        keys.left = false;
    }



};




document.body.onkeyup = function (e) {
    keys.moving = false;
    keys.right = false;
    keys.left = false;
};

window.addEventListener('keydown', run);
