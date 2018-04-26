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
var img = document.getElementById('player1');
var src = document.createAttribute('src');

img.setAttributeNode(src);

function run() {
    if (keys.moving === true) {
        if (keys.left === true && Player1.pos > -10) {
            Player1.pos = Player1.pos - Player1.speed;
        }
        if (keys.right === true && Player1.pos > -10) {
            Player1.pos = Player1.pos - Player1.speed;
        }
        if (keys.right === true && Player1.pos < 780) {
            Player1.pos = Player1.pos + Player1.speed;
        }
        if (keys.right === true && Player1.pos < 780) {
            Player1.pos = Player1.pos + Player1.speed;
        }
        Player1.move();
    }

}
var framerate = setInterval(run, 1);

function animate() {

    for (i = 0; i > 8; i += 0.5) {
        if (i === 1) {
            img.src.value = "sprite_red/practice_attack_2.png";
        }
        if (i === 2) {
            img.src.value = "sprite_red/practice_attack_3.png";
        }
        if (i === 3) {
            img.src.value = "sprite_red/practice_attack_4.png";
        }
        if (i === 4) {
            img.src.value = "sprite_red/practice_attack_5.png";
        }
        if (i === 5) {
            img.src.value = "sprite_red/practice_attack_6.png";
        }
        if (i === 6) {
            img.src.value = "sprite_red/practice_attack_7.png";
        }
        if (i === 7) {
            img.src.value = "sprite_red/practice_attack_7.png";
        }
    }
}

var framerateattack = setInterval(animate, 5);

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
    if (e.keyCode === 32) {
        animate();
    }

};





document.body.onkeyup = function (e) {
    keys.moving = false;
    keys.right = false;
    keys.left = false;
};

window.addEventListener('keydown', run);
