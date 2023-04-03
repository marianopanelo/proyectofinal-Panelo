
let cabeza_arriba = document.querySelector ("#parar_uno")
let medio_medio = document.querySelector ("#parar_dos")
let pies_abajo = document.querySelector ("#parar_tres")
let parte_cuatro = document.querySelector ("#parar_cuatro")


/* queria poner las imagenes para q vayan pasando , pero no las pude terminar de 
seleccionar , como que me tiraba error por no encontrarlas , asi que cambie de idea y puse los colores

function seleccionar () {
    
console.log(cabeza_arriba)
    if(cabeza_arriba.style.backgroundImage == "url(./fotos/calabera\ arriba.png);"){
    cabeza_arriba.style.backgroundImage = "url(./fotos/estrella\ arriba.png);"
   }

  
else{
    cabeza_arriba.style.backgroundImage = "url(./fotos/calabera\ arriba.png);"
   }
}*/


function seleccionar () {
    
if(cabeza_arriba.style.backgroundColor == "red")
{
    cabeza_arriba.style.backgroundColor = "violet"
}

else if (cabeza_arriba.style.backgroundColor == "violet")
{
    cabeza_arriba.style.backgroundColor = "darkgoldenrod"
}

else if (cabeza_arriba.style.backgroundColor == "darkgoldenrod")
{
    cabeza_arriba.style.backgroundColor = "blue"
}

else {
    cabeza_arriba.style.backgroundColor = "red"
}
}

let arriba = document.getElementById("arriba")

let intervalo_1 = setInterval(seleccionar , 1500)
arriba.addEventListener("click" , function(){
    clearInterval(intervalo_1)
})

function seleccionar_2 () {
    
    if(medio_medio.style.backgroundColor == "darkgoldenrod")
    {
        medio_medio.style.backgroundColor = "violet"
    }
    
    else if (medio_medio.style.backgroundColor == "violet")
    {
        medio_medio.style.backgroundColor = "red"
    }
    
    else if (medio_medio.style.backgroundColor == "red")
    {
        medio_medio.style.backgroundColor = "blue"
    }
    
    else {
        medio_medio.style.backgroundColor = "darkgoldenrod"
    }
}
    
let medio = document.getElementById("medio")
    
let intervalo_2 = setInterval(seleccionar_2 , 1000)
medio.addEventListener("click" , function(){
    clearInterval(intervalo_2)
})

function seleccionar_3 () {
    
if(pies_abajo.style.backgroundColor == "violet")
{
    pies_abajo.style.backgroundColor = "darkgoldenrod"
}

else if (pies_abajo.style.backgroundColor == "darkgoldenrod")
{
    pies_abajo.style.backgroundColor = "blue"
}

else if (pies_abajo.style.backgroundColor == "blue")
{
    pies_abajo.style.backgroundColor = "red"
}

else {
    pies_abajo.style.backgroundColor = "violet"
}
}

let abajo = document.getElementById("abajo")

let intervalo_3 = setInterval(seleccionar_3 , 500)
abajo.addEventListener("click" , function(){
    clearInterval(intervalo_3)
})




function seleccionar_4 () {
    
    if(parte_cuatro.style.backgroundColor == "blue")
    {
        parte_cuatro.style.backgroundColor = "red"
    }
    
    else if (parte_cuatro.style.backgroundColor == "red")
    {
        parte_cuatro.style.backgroundColor = "violet"
    }
    
    else if (parte_cuatro.style.backgroundColor == "violet")
    {
        parte_cuatro.style.backgroundColor = "darkgoldenrod"
    }
    
    else {
        parte_cuatro.style.backgroundColor = "blue"
    }
    }
    
    let cuatro = document.getElementById("cuatro")
    
    let intervalo_4 = setInterval(seleccionar_4 , 250)
    cuatro.addEventListener("click" , function(){
        clearInterval(intervalo_4)
    })