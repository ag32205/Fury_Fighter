var img = document.getElementById('player1');
var src = document.createAttribute('src');
src.value = "sprite_red/practice_idle.png";
img.setAttributeNode(src);

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
}






window.addEventListener('keydown', animate);
