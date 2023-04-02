
/*juego*/

let apuesta = document.getElementById("tragosAApostar")
apuesta.addEventListener ("click" , function (e){
    let prueba = e.target.parentNode
    let cantidad_apostada = Number(prueba.querySelector("input").value);
    console.log(cantidad_apostada)
    prueba.remove()


    let numeroGanador = Number(Math.floor(Math.random() * (0 + 100)))
    console.log(numeroGanador)
    let numero_elejido = document.getElementById("numeroApostado")
    let respuestas = document.getElementById("respuestas")
    let intentos = 0
  

    

    numero_elejido.addEventListener ("click" , function (e){
        intentos ++
        let prueba_dos = e.target.parentNode
        let numero_apuesta = Number(prueba_dos.querySelector("input").value);
            
        console.log (intentos)
            if  (numero_apuesta == numeroGanador) { 
                let respuesta = document.createElement("p")
                respuesta.innerHTML= `intento numero  ${intentos} 
                                    su numero fue ${numero_apuesta}
                                    felicidades encontraste el numero
                                    `  
                respuestas.append(respuesta)
                prueba_dos.remove ()
                function tragos_ganados (){

                    if (intentos <= 2){
                        cantidad_apostada *= 3
                        respuesta.innerHTML = `felicidades, encontro el numeor por lo cual das ${cantidad_apostada} shot `
                    }
                
                    else if (intentos <= 5  && intentos > 2){
                        cantidad_apostada  *= 1.5
                        respuesta.innerHTML = `felicidades, encontro el numeor por lo cual das ${cantidad_apostada} shot `
                    }
                
                    else if (intentos <= 7 && intentos > 5){
                         
                        respuesta.innerHTML = ` encontro el numeor, por lo cual no toma ni das shot`
                    }
                
                    else {
                         
                        respuesta.innerHTML = ` encontro el numeor tarde, te toca tomar ${cantidad_apostada} shot`
                    }                
                }
                
                tragos_ganados()
            }
            
            else if ((numero_apuesta + 6) > numeroGanador && numero_apuesta  < numeroGanador ) {
                let respuesta = document.createElement("p")
                respuesta.innerHTML= `intento numero  ${intentos} 
                                    su numero fue ${numero_apuesta}
                                    el numero ganador esta entre los 5 numeros siguientes`
                respuestas.append(respuesta)

            }
            
            else if ((numero_apuesta - 6) < numeroGanador && numero_apuesta > numeroGanador ) {
                let respuesta = document.createElement("p")
                respuesta.innerHTML= `intento numero  ${intentos}
                                    su numero fue ${numero_apuesta}
                                    el numero ganador esta entre los 5 numeros anteriores`
                respuestas.append(respuesta)


            }
            
            else if (numero_apuesta > numeroGanador ) {
                let respuesta = document.createElement("p")
                respuesta.innerHTML= `intento numero  ${intentos}
                                        su numero fue ${numero_apuesta}
                                        el numero ganador es menor`
                respuestas.append(respuesta)
                

            }
            
            else if (numero_apuesta < numeroGanador) {
                let respuesta = document.createElement("p")
                respuesta.innerHTML= `intento numero  ${intentos}
                                        su numero fue ${numero_apuesta}    
                                        el numero ganador es mayor`
                respuestas.append(respuesta)


            }
            
            else {
                let respuesta = document.createElement("p")
                respuesta.innerHTML= `intento numero  ${intentos}
                                        su numero fue ${numero_apuesta}        
                                        no eligio un numero , por favor vuelva a intentarlo`
                respuestas.append(respuesta)
            }

    })
})