function Player(pos, speed, id) {
    this.pos = pos;
    this.speed = speed;
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
var Player1 = new Player(400, 2, 'player1');
var Player2 = new Player(300, 2, 'player2');


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
    if (keys.moving === true) {
        if (keys.left === true && Player1.pos > -20) {
            Player1.pos = Player1.pos - Player1.speed;
        }

        if (keys.right === true && Player1.pos < 770) {
            Player1.pos = Player1.pos + Player1.speed;
        }


        Player1.move();
    }
    if (keys1.moving === true) {
        if (keys1.left === true && Player2.pos > -75) {
            Player2.pos = Player2.pos - Player2.speed;
        }
        if (keys1.right === true && Player2.pos < 715) {
            Player2.pos = Player2.pos + Player2.speed;
        }
        Player2.move();
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

        if (keys1.jumping === true) {
            if (keys1.up === true && Player2.ypos > -25) {
                Player2.ypos = Player2.ypos - Player2.speed;
                document.getElementById('player2').src = "sprite_blue/float_blue.png";
            }
            Player2.move();
        }

    }



var framerate = setInterval(jump, 2);

function descend() {
    if (keys.jumping === false && Player1.ypos < 555) {
        Player1.ypos = Player1.ypos + Player1.speed;
    }
    Player1.move();
    if (keys1.jumping === false && Player2.ypos < 555) {
        Player2.ypos = Player2.ypos + Player2.speed;
    }
    Player2.move();
}
var framerate = setInterval(descend, 2);

document.body.onkeydown = function frame(e) {

    if (e.keyCode === keys1.l) { //a
        keys1.moving = true;
        document.getElementById('player2').src = "sprite_blue/bluerun_left.png";
        document.getElementById('player2').direction = "left";
        keys1.left = true;
        keys1.right = false;
    }
    if (e.keyCode === keys.l) { //left
        keys.moving = true;
        document.getElementById('player1').src = "sprite_red/practice_redrun_left.png";
        document.getElementById('player1').direction = "left";
        keys.left = true;
        keys.right = false;
    }
    if (e.keyCode === keys1.r) { //d
        keys1.moving = true;
        document.getElementById('player2').src = "sprite_blue/bluerun_right.png";
        document.getElementById('player2').direction = "right";
        keys1.right = true;
        keys1.left = false;

    }
    if (e.keyCode === keys.r) { //right
        keys.moving = true;
        document.getElementById('player1').src = "sprite_red/practice_redrun_right.png";
        document.getElementById('player1').direction = "right";
        keys.right = true;
        keys.left = false;
    }
    if (e.keyCode === keys.u) { //up
        keys.up = true;
        keys.jumping = true;
        document.getElementById('player1').src = "sprite_red/practice_float_red.png";
    }
    if (e.keyCode === keys1.u) { //w
        keys1.jumping = true;
        keys1.up = true;
        document.getElementById('player2').src = "sprite_blue/float_blue.png";

    }


};

function stop(e) {
    if (e.keyCode === keys.r || e.keyCode === keys.l) {
        keys.moving = false;

        document.getElementById('player1').src = "sprite_red/practice_idle.png";
    }
    if (e.keyCode === keys.u) {
        keys.jumping = false;
        document.getElementById('player1').src = "sprite_red/practice_idle.png";
    }
    if (e.keyCode || keys1.r && e.keyCode === keys1.l) {
        keys1.moving = false;
        document.getElementById('player2').src = "sprite_red/practice_idle.png";
    }
    if (e.keyCode === keys1.u) {
        keys1.jumping = false;
        document.getElementById('player1').src = "sprite_red/practice_idle.png";
    }


};

window.addEventListener('keyup', stop);
