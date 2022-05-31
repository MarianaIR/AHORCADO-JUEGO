function dibujarLetra(letra) {
    var indicador = 0;
    for(var i = 0; i < palabraJuego.length; i++) {
        if(letra == palabraJuego[i] && palabraJuego.join("") != palabraEnJuego.join("")) {
            pincel.beginPath();
            pincel.fillStyle = "lightblue";
            pincel.font = "bold 50px 'Inter'";
            pincel.fillText(letra, (305 + (60 * i)), 290);
            palabraEnJuego[i] = palabraJuego[i];
            indicador++;
        }
        
        if(palabraJuego.join("") == palabraEnJuego.join("")) {
            flag = false;
            esGanador = true;
            dibujarGanador();
        }
    }
    if(indicador == 0) {
        pincel.beginPath();
        pincel.fillStyle = "lightblue";
        pincel.font = "bold 40px 'Inter'";
        pincel.fillText(letra, (255 + (60 * contadorLetraError)), 390);
        contadorLetraError++;
        return false;
    } else {
        return true;
    }
}