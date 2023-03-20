
/*juego*/
let DineroInicial = Number(prompt("indique cuanto dinero posee"))
let apuesta = Number(prompt("indique cuanto desea apostar"))
let numeroGanador = Number(Math.floor(Math.random() * (0 + 100)))
let ciclos = 1

for (let intentos = 0 ; intentos <= 20 ; intentos++){

    let numeroElegido = Number(prompt("elija un numero de 0 a 100"))

    if  (numeroElegido == numeroGanador) { 
        alert  ("felicidades encontraste el numero")
       break
    }

    else if ((numeroElegido + 6) > numeroGanador && numeroElegido  < numeroGanador ) {
        alert ("el numero ganador esta entre los 5 numeros siguientes")
    }

   else if ((numeroElegido - 6) < numeroGanador && numeroElegido > numeroGanador ) {
        alert ("el numero ganador esta entre los 5 numeros anteriores")
    }

    else if (numeroElegido > numeroGanador ) {
        alert ("el numero ganador es menor")
    }

    else if (numeroElegido < numeroGanador) {
        alert ("el numero ganador es mayor")
    }

    else {
        alert ("no eligio un numero , por favor vuelva a intentarlo")
    }
    ciclos++
}

    
/*le tube que poner ciclos++ poruqe necesitaba sacar las cantidad de vueltas del ciclo y si ponia abajo intentos ,que seria la cantidad de siclos
no me lo tomaba , supongo que es porque cuando hago un break me corta los siclos y no me los cuenta*/
    
alert ("el numero ganador era " + numeroGanador)


function cuentas (operacion , num1, num2){
    return operacion (num1, num2)
}
    
function resta (a,b){
    return a - b  
}
    
function suma2 (a, b){
    return a + b
}




function cantidadGanada (porcentaje){
    
    if (ciclos <= 2){
        porcentaje = 3
        let suma = (apuesta * porcentaje)
    }
    
    else if (ciclos <= 5  && ciclos > 2){
        porcentaje = 1.5
        let suma = (apuesta * porcentaje)
    }
    
    else if (ciclos <= 7 && ciclos > 5){
        porcentaje = 1
        let suma = (apuesta * porcentaje)
    }
    
    else {
        porcentaje = 0
        let suma = (apuesta * porcentaje)
    }
    
    let suma = (apuesta * porcentaje)

    alert ("usted gano " + suma + "$" )
    
    
    
    let resta2 = cuentas (resta , DineroInicial, apuesta)

    alert (  "a usted le quedaban " + (cuentas (resta , DineroInicial, apuesta)) + "$")
    alert (  "a usted le quedan " + (cuentas (suma2 , resta2, suma)) + "$")

}
cantidadGanada()
