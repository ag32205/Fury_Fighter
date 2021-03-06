function Player(pos, speed, id) {
    this.pos = pos;
    this.speed = speed;
    this.id = id;
    this.ypos = 565;
    this.alive = "true";
    this.health = 20;
    var alive = document.createAttribute('alive');
    var src = document.createAttribute('src');
    var direction = document.createAttribute('direction');
    alive.value = this.alive;
    this.src = "sprite_red/practice_idle.png";
    src.value = this.src;
    this.direction = "left";
    direction.value = this.direction;
    var fighter = document.getElementById(this.id);
    fighter.setAttributeNode(src);
    fighter.setAttributeNode(direction);
    fighter.setAttributeNode(alive);

    this.move = function () {
        fighter.style.left = this.pos + 'px';
        fighter.style.top = this.ypos + 'px';
    };

    fighter.style.left = this.pos + 'px';
    fighter.style.top = this.ypos + 'px';
}
var Player1 = new Player(400, 2, 'player1');
var Player2 = new Player(300, 2, 'player2');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');



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
    if (keys.moving === "true") {
        if (keys.left === true && Player1.pos > -20) {
            Player1.pos = Player1.pos - Player1.speed;
        }

        if (keys.right === true && Player1.pos < 770) {
            Player1.pos = Player1.pos + Player1.speed;
        }


        Player1.move();
    }
    if (keys1.moving === "true") {
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
    if (keys.jumping === "true") {
        if (keys.up === true && Player1.ypos > -15) {
            Player1.ypos = Player1.ypos - Player1.speed;
            player1.src = "sprite_red/practice_float_red.png";

        }
        Player1.move();
    }

    if (keys1.jumping === "true") {
        if (keys1.up === true && Player2.ypos > -15) {
            Player2.ypos = Player2.ypos - Player2.speed;
            player2.src = "sprite_blue/float_blue.png";
        }
        Player2.move();



    }

}



var framerate = setInterval(jump, 2);




function descend() {
    if (keys.descend === true) {

        if (keys.jumping === false && Player1.ypos < 565) {


            Player1.ypos = Player1.ypos + Player1.speed;

        }

    }

    Player1.move();

    if (keys1.jumping === false && Player2.ypos < 565) {
        Player2.ypos = Player2.ypos + Player2.speed;
    }

    Player2.move();
}
var framerate = setInterval(descend, 2);


function Updatehealth() {
    var bluehealth = document.getElementById('healthblue');
    var redhealth = document.getElementById('healthred');
    bluehealth.style.width = (Player2.health * 40) + 'px';
    redhealth.style.width = (Player1.health * 40) + 'px';

}

document.body.onkeydown = function frame(e) {
    if (player2.alive === "true") {
        if (e.keyCode === keys1.l) { //a
            keys1.moving = true;
            player2.src = "sprite_blue/bluerun_left.png";
            player2.direction = "left";
            keys1.left = true;
            keys1.right = false;
        }
        if (e.keyCode === keys1.r) { //d
            keys1.moving = true;
            player2.src = "sprite_blue/bluerun_right.png";
            player2.direction = "right";
            keys1.right = true;
            keys1.left = false;

        }
        if (e.keyCode === keys1.u) { //w
            keys1.jumping = true;
            keys1.up = true;
            player2.src = "sprite_blue/float_blue.png";

        }
        if (e.keyCode === 16) {
            if (player2.direction === "right") {
                if (((Player1.pos - 50) < (Player2.pos + 25)) && ((Player1.pos - 50) > (Player2.pos - 5))) {
                    if ((Player1.ypos > (Player2.ypos - 20)) && (Player1.ypos < (Player2.ypos + 20))) {
                        Player1.health -= 1;
                        Updatehealth();
                        if (Player1.health === 0 && document.getElementById('redwins').textContent !== "Red Wins!") {
                            document.getElementById('bluewins').textContent = "Blue Wins!";
                            player1.alive = "false";
                            die();
                        }
                    }
                }
            }
            if (player2.direction === "left") {
                if (((Player1.pos - 50) > (Player2.pos - 25)) && ((Player1.pos - 50) < (Player2.pos + 5))) {
                    if ((Player1.ypos > (Player2.ypos - 20)) && (Player1.ypos < (Player2.ypos + 20))) {
                        Player1.health -= 1;
                        Updatehealth();
                        if (Player1.health === 0 && document.getElementById('redwins').textContent !== "Red Wins!") {
                            document.getElementById('bluewins').textContent = "Blue Wins!";
                            player1.alive = "false";
                            die();
                        }
                    }
                }

            }
        }
    }
    if (player1.alive === true) {
        if (e.keyCode === keys.l) { //left
            keys.moving = true;
            player1.src = "sprite_red/practice_redrun_left.png";
            player1.direction = "left";
            keys.left = true;
            keys.right = false;
        }

        if (e.keyCode === keys.r) { //right
            keys.moving = true;
            player1.src = "sprite_red/practice_redrun_right.png";
            player1.direction = "right";
            keys.right = true;
            keys.left = false;
        }
        if (e.keyCode === keys.u) { //up
            keys.up = true;
            keys.jumping = true;
            player1.src = "sprite_red/practice_float_red.png";
        }
        if (e.keyCode === 13) {
            if (player1.direction === "right") {
                if (((Player2.pos + 50) < (Player1.pos + 25)) && ((Player2.pos + 50) > (Player1.pos - 5))) {
                    if ((Player2.ypos > (Player1.ypos - 20)) && (Player2.ypos < (Player1.ypos + 20))) {
                        Player2.health -= 1;
                        Updatehealth();
                        if (Player2.health === 0 && document.getElementById('bluewins').textContent !== "Blue Wins!") {
                            document.getElementById('redwins').textContent = "Red Wins!";
                            player2.alive = false;
                            die2();
                        }
                    }
                }
            }
            if (player1.direction === "left") {
                if (((Player2.pos + 50) > (Player1.pos - 25)) && ((Player2.pos + 50) < (Player1.pos + 5))) {
                    if ((Player2.ypos > (Player1.ypos - 20)) && (Player2.ypos < (Player1.ypos + 20))) {
                        Player2.health -= 1;
                        Updatehealth();
                        if (Player2.health === 0 && document.getElementById('bluewins').textContent !== "Blue Wins!") {
                            document.getElementById('redwins').textContent = "Red Wins!";
                            player2.alive = false;
                            die2();
                        }
                    }
                }

            }
        }
    }

};



function die() {

    setTimeout(function () {
        player1.src = "death/dead1.png";
    }, 50);
    setTimeout(function () {
        player1.src = "death/dead2redright.png";
    }, 100);
    setTimeout(function () {
        player1.src = "death/dead3redright.png";
    }, 150);
    setTimeout(function () {
        player1.src = "death/dead4redright.png";
    }, 200);
    setTimeout(function () {
        player1.src = "death/dead5redright.png";
    }, 250);
    setTimeout(function () {
        player1.src = "death/dead6redright.png";
    }, 350);
    setTimeout(function () {
        player1.src = "death/dead7redright.png";
    }, 400);
    setTimeout(function () {
        player1.src = "death/dead8redright.png";
    }, 450);
    setTimeout(function () {
        player1.src = "death/dead9redright.png";
    }, 500);
    setTimeout(function () {
        player1.src = "death/dead10redright.png";
    }, 550);


}

function die2() {

    setTimeout(function () {
        player2.src = "death/dead1.png";
    }, 50);
    setTimeout(function () {
        player2.src = "death/dead2redright.png";
    }, 100);
    setTimeout(function () {
        player2.src = "death/dead3redright.png";
    }, 150);
    setTimeout(function () {
        player2.src = "death/dead4redright.png";
    }, 200);
    setTimeout(function () {
        player2.src = "death/dead5redright.png";
    }, 250);
    setTimeout(function () {
        player2.src = "death/dead6redright.png";
    }, 350);
    setTimeout(function () {
        player2.src = "death/dead7redright.png";
    }, 400);
    setTimeout(function () {
        player2.src = "death/dead8redright.png";
    }, 450);
    setTimeout(function () {
        player2.src = "death/dead9redright.png";
    }, 500);
    setTimeout(function () {
        player2.src = "death/dead10redright.png";
    }, 550);


}

function stop(e) {
    if (player1.alive === true) {
        if (e.keyCode === keys.r || e.keyCode === keys.l) {
            keys.moving = false;

            player1.src = "sprite_red/practice_idle.png";
        }
        if (e.keyCode === keys.u) {
            keys.jumping = false;
            keys.descend = true;
            player1.src = "sprite_red/practice_idle.png";
        }
    }
    if (player2.alive === true) {
        if (e.keyCode === keys1.r || e.keyCode === keys1.l) {
            keys1.moving = false;
            player2.src = "sprite_red/practice_idle.png";
        }
        if (e.keyCode === keys1.u) {
            keys1.jumping = false;
            keys1.descend = true;
            player2.src = "sprite_red/practice_idle.png";
        }
    }

};

window.addEventListener('keyup', stop);
