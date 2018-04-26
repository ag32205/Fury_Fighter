var Player1 = document.getElementById('player1');




function animate() {
    var image = document.getElementById('player1').src;
    for (i = 0; i > 7; i += 0.5) {
        if (i === 1) {
            image = "sprite_red/practice_attack_2.png";
        }
        if (i === 2) {
            image = "sprite_red/practice_attack_3.png";
        }
        if (i === 3) {
            image = "sprite_red/practice_attack_4.png";
        }
        if (i === 4) {
            image = "sprite_red/practice_attack_5.png";
        }
        if (i === 5) {
            image = "sprite_red/practice_attack_6.png";
        }
        if (i === 6) {
            image = "sprite_red/practice_attack_7.png";
        }
        if (i === 7) {
            image = "sprite_red/practice_idle.png";
        }
        Player1.src = image;
    }
}
