function Player(pos, speed, controlset, id) {
    this.pos = pos;
    this.speed = speed;
    this.controlset = controlset;
    this.id = id;
    this.ypos = 555;
    var fighter = document.getElementById(this.id);

    this.move = function () {
        fighter.style.left = this.pos + 'px';
        fighter.style.top = this.ypos + 'px';
    };

    fighter.style.left = this.pos + 'px';
    fighter.style.top = this.ypos + 'px';
}
var Player1 = new Player(400, 2, 1, 'player1');
var Player2 = new Player(300, 2, 2, 'player2');


function Keyset(left, right, up) {
    this.l = left;
    this.r = right;
    this.u = up;
    this.left = Boolean;
    this.right = Boolean;
    this.up = Boolean;

    this.moving = Boolean;
    this.jumping = Boolean;
    this.attacking = Boolean;
}
var keys = new Keyset(37, 39, 38);
var keys1 = new Keyset(65, 68, 87)
var iskeydown = Boolean;


function run() {
    if (keys.moving == true) {
        if (keys.left === true && Player1.pos > -20) {
            Player1.pos = Player1.pos - Player1.speed;
        }
        if (keys.left === true && Player1.pos > -20) {
            Player1.pos = Player1.pos - Player1.speed;
        }
        if (keys.right === true && Player1.pos < 770) {
            Player1.pos = Player1.pos + Player1.speed;
        }
        if (keys.right === true && Player1.pos < 770) {
            Player1.pos = Player1.pos + Player1.speed;
        }
        Player1.move();
    }

}
var framerate = setInterval(run, 1);

function jump() {
    if (keys.jumping === true) {
        if (keys.up === true && Player1.ypos > -25) {
            Player1.ypos = Player1.ypos - Player1.speed;
            document.getElementById('player1').src = "sprite_red/practice_float_red.png";
        }
        Player1.move();
    }
}
var framerate = setInterval(jump, 2);

function descend() {
    if (keys.jumping === false && Player1.ypos < 555) {
        Player1.ypos = Player1.ypos + Player1.speed;
    }
    Player1.move();
}
var framerate = setInterval(descend, 2);

document.body.onkeydown = function frame(e) {

    if (e.keyCode === keys1.l) { //a
        keys.moving = true;

        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === keys.l) { //left
        keys.moving = true;
        document.getElementById('player1').src = "sprite_red/practice_redrun_left.png";
        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === 68) { //d
        keys.moving = true;

        keys.right = true;
        keys.left = false;

    }
    if (e.keyCode === keys.r) { //right
        keys.moving = true;
        document.getElementById('player1').src = "sprite_red/practice_redrun_right.png";
        keys.right = true;
        keys.left = false;
    }
    if (e.keyCode === keys.u) { //up
        keys.up = true;
        keys.jumping = true;
        document.getElementById('player1').src = "sprite_red/practice_float_red.png";
    }
    if (e.keyCode === 87) { //w
        keys.jumping = true;
        keys.up = true

    }



};

document.body.onkeyup = function (e) {
    keys.moving = false;
    keys.jumping = false;
    document.getElementById('player1').src = "sprite_red/practice_idle.png";
};
