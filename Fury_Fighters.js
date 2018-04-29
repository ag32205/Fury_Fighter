function Player(pos, speed, id) {
    this.pos = pos;
    this.speed = speed;
    this.id = id;
    this.ypos = 537;
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

var health1 = 20;
var health2 = 20;


function Platform(pos, ypos, id) {
    this.pos = pos;
    this.ypos = ypos;
    this.id = id;
    var platform = document.getElementById(this.id);
    platform.style.left = this.pos + 'px';
    platform.style.top = this.ypos + 'px';
}

var Platform1 = new Platform(500, 400, 'platform');
var Platform2 = new Platform(100, 350, 'platform2');
var Platform3 = new Platform(390, 100, 'platform3');

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
    this.descend = Boolean;
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

 if (Platform1.pos > Player1.pos < (Platform1.pos + 100) && Player1.ypos == Platform1.ypos) {
        keys.decend = false;
    }

    if (keys.jumping === false && Player1.ypos < 537) {
        Player1.ypos = Player1.ypos + Player1.speed;
    }


    if (keys.decend === false){
         Player1.ypos = Player1.ypos + Player1.speed;
    }

    Player1.move();
    if (keys1.jumping === false && Player2.ypos < 537) {
        Player2.ypos = Player2.ypos + Player2.speed;
    }
    Player2.move();
}
var framerate = setInterval(descend, 2);


function Updatehealth(){
    var bluehealth = document.getElementById('healthblue');
    var redhealth = document.getElementById('healthred');
    bluehealth.style.width = (health2 * 40) + 'px';
    redhealth.style.width = (health1 * 40) + 'px';

}

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
    if (e.keyCode === 13) {
        if (document.getElementById('player1').direction === "right") {
            if (((Player2.pos + 50) < (Player1.pos + 25)) && ((Player2.pos + 50) > (Player1.pos - 5))) {
                health2 -= 1;
                Updatehealth();
            }
        }
        if (document.getElementById('player1').direction === "left") {
            if (((Player2.pos + 50) > (Player1.pos - 25)) && ((Player2.pos + 50) < (Player1.pos + 5))) {
                health2 -= 1;
                Updatehealth();
            }

        }
    }
    if (e.keyCode === 16) {
        if (document.getElementById('player2').direction === "right") {
            if (((Player1.pos - 50) < (Player2.pos + 25)) && ((Player1.pos - 50) > (Player2.pos - 5))) {
                health1 -= 1;
                Updatehealth();
            }
        }
        if (document.getElementById('player2').direction === "left") {
            if (((Player1.pos - 50) > (Player2.pos - 25)) && ((Player1.pos - 50) < (Player2.pos + 5))) {
                health1 -= 1;
                Updatehealth();
            }

        }
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
