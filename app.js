
        function promediar(arr) {
           
            let promedio = arr.reduce((a, b) => a + b) / arr.length;

            if (arr.length > 4) arr.pop(); // el largo max del array para promediar (en este caso 4)
           
            return promedio;
        }

        function mostrarIndicTempo(tempo,indicTiempo) {
            if (tempo < 20 ) {indicTiempo="Larguísimo"; color = "green";}
            else if (tempo > 20 && tempo <40) {indicTiempo="lento moderado"; color="orange";}
            else if (tempo > 39 && tempo <60) {indicTiempo="Largo"; color="pink";}
            else if (tempo > 59 && tempo <66) {indicTiempo="Largheto";color="blue";}
            else if (tempo > 65 && tempo <76) {indicTiempo="Adaggio"; color="lightblue";}
            else if (tempo > 75 && tempo <108) {indicTiempo="Andante" ;color="red"}
            else if (tempo >107 && tempo <120) {indicTiempo="Moderato"; color="purple"}
            else if (tempo > 119 && tempo <168) {indicTiempo="Allegro"; color="olive"}
            else if (tempo >167 && tempo <200) {indicTiempo="Presto";color="Fuchsia" }
            else if (tempo >199 &&  tempo <208 ) {indicTiempo="Prestissimo";color="#F50627"}

            indicTempTexto.style.color=(color);

            indicTempTexto.innerHTML=(indicTiempo)
            
            
        }

        function main(event) {
            let tiempoActual = (Math.trunc(event.timeStamp));
            let diferenciaTiempo = tiempoActual - tiempoAnterior; //tempo actual (entre pulso anterior y actual)
            
            
            /*compara ultimos dos tiempos (actual y ultimo del array) y si es grande la dif restea el array)*/

            if ((diferenciaTiempo - arrParaPromedio[0]) > 100 || (arrParaPromedio[0] - diferenciaTiempo > 100)) {
                arrParaPromedio.splice(0, arrParaPromedio.length);
            //   console.log("tempo reset");
            }

            arrParaPromedio.unshift(diferenciaTiempo) //mete en el array el tempo actual 
           // console.log(arrParaPromedio);
            let promedio = Math.trunc(promediar(arrParaPromedio))
            tempo=Math.trunc((60 / promedio) * 1000)
            tempoActualTexto.innerHTML =( tempo + " bpm");
            tiempoAnterior = tiempoActual;
            mostrarIndicTempo(tempo,indicTiempo);              
        }
        let color ="black";
        let tempo=0;
        let arrParaPromedio = [];
        let tiempoAnterior = 0;
        let indicTiempo="";
        const boton1 = document.getElementById("boton1");
        boton1.addEventListener("click", main);
        const tempoActualTexto = document.getElementById("tempoActual");
        const indicTempTexto = document.getElementById("indicTempo");
