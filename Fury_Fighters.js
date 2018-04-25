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
    };
    fighter.style.left = this.pos + 'px';
    fighter.style.top = ypos + 'px';
}

function Keyset(left, right) {
    this.left = left;
    this.right = right;
    this.moving = Boolean;
}

var keys = new Keyset(37, 39);

var Player1 = new Player(400, 5, 1, 'player1');
var iskeydown = Boolean;


function run() {
    if (keys.left === true) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (keys.right === true) {
        Player1.pos = Player1.pos - Player1.speed;
    }
    if (keys.right === true) {
        Player1.pos = Player1.pos + Player1.speed;
    }
    if (keys.right === true) {
        Player1.pos = Player1.pos + Player1.speed;
    }
    Player1.move();
}




document.body.onkeydown = function frame(e) {
    keys.moving = true;
    if (e.keyCode === 65 && Player1.pos > -10) {
        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === 37 && Player1.pos > -10) {
        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === 68 && Player1.pos < 780) {
        keys.right = true;
        keys.left = false;
    }
    if (e.keyCode === 39 && Player1.pos < 780) {
        keys.right = true;
        keys.left = false;
    }

};




document.body.onkeyup = function (e) {
    keys.moving = false;
};

window.addEventListener('keydown', run());
