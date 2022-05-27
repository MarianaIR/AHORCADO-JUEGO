function dibujarGanador() {
    pincel.beginPath();
    pincel.fillStyle = "green";
    pincel.font = "bold 40px 'Inter'";
    pincel.fillText("GANASTE", 405, 100);
    pincel.fillText("FELICIDADES!", 380, 150);
}

function dibujarPerdedor() {
    pincel.beginPath();
    pincel.fillStyle = "red";
    pincel.font = "bold 40px 'Inter'";
    pincel.fillText("FIN DEL JUEGO!", 405, 100);
}
