
var i = 0;
var txt = 'Qui sommes nous?'; /* le text */
var speed = 100;
var presentation = document.getElementsByClassName('presentation');
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();








