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





window.addEventListener('keydown', animate);
