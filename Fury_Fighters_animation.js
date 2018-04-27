var img = document.getElementById('player1');
var src = document.createAttribute('src');
src.value = "sprite_red/practice_idle.png";
img.setAttributeNode(src);

function animate() {

src.value = "sprite_red/practice_attack_4.png";

}







window.addEventListener('keydown', animate);
