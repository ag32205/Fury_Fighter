var img = document.getElementById('player1');
var img2 = document.getElementById('player2');
var src2 = document.createAttribute('src');
var direction1 = document.createAttribute('direction');
var direction2 = document.createAttribute('direction');
var src = document.createAttribute('src');
src2.value = "sprite_red/practice_idle.png";
src.value = "sprite_red/practice_idle.png";
img2.setAttributeNode(src2);
img2.setAttributeNode(direction2);
img.setAttributeNode(src);
img.setAttributeNode(direction1);

function animate(e) {

    if (e.keyCode === 13) {

        setTimeout(function () {
            src.value = "sprite_red/practice_attack_2.png";
        }, 1);
        setTimeout(function () {
            src.value = "sprite_red/practice_attack_3.png";
        }, 100);
        setTimeout(function () {
            src.value = "sprite_red/practice_attack_4.png";
        }, 200);
        setTimeout(function () {
            src.value = "sprite_red/practice_attack_5.png";
        }, 300);
        setTimeout(function () {
            src.value = "sprite_red/practice_attack_6.png";
        }, 400);
        setTimeout(function () {
            src.value = "sprite_red/practice_attack_7.png";
        }, 500);
        setTimeout(function () {
            src.value = "sprite_red/practice_idle.png";
        }, 600);
    }
    if (e.keyCode === 16) {
        if (img2.direction === "right") {

            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_1.png";
            }, 1);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_2.png";
            }, 100);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_3_right.png";
            }, 200);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_4_right.png";
            }, 300);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_5_right.png";
            }, 400);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_6_right.png";
            }, 500);
            setTimeout(function () {
                src2.value = "sprite_red/practice_idle.png";
            }, 600);
        }
        if (img2.direction === "left") {
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_1_left.png";
            }, 1);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_2_left.png";
            }, 100);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_3_left.png";
            }, 200);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_4_left.png";
            }, 300);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_5_left.png";
            }, 400);
            setTimeout(function () {
                src2.value = "sprite_blue/attack_blue_6_left.png";
            }, 500);
            setTimeout(function () {
                src2.value = "sprite_red/practice_idle.png";
            }, 600);
        }
    }
}








window.addEventListener('keydown', animate);
