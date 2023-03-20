localStorage.clear ()

let botonCompra = document.querySelectorAll(".botonCompra");
let tablaCompra = document.getElementById("carrito_productos")


let finDeCompra_borrar = document.getElementById("fin_compra_borrar");
finDeCompra_borrar.addEventListener("click" , function(){
    localStorage.clear ()
    let borrar_compras = document.getElementById("carrito_productos")
    borrar_compras.remove()
    alert("se elimino carrito, recague la pagina")

})

let finDeCompra_comprar = document.getElementById("fin_compra_comprar");
finDeCompra_comprar.addEventListener("click" , function(){
    localStorage.clear ()
    let borrar_compras = document.getElementById("carrito_productos")
    borrar_compras.remove()
    alert("gracias por su compra")
})








let carrito = [{}];




function agregarACarrito(e) {
    
    let padre = e.target.parentNode

    let nombreBevida = padre.querySelector("h3").textContent;
    let fotoBevida = padre.querySelector("img").src;
    let precioBevida = padre.querySelector("p").textContent;
   

    let productos = {
        nombre : nombreBevida,
        foto : fotoBevida,
        cantidad : 0,
        precio : precioBevida,
    }
    
    carrito.push(productos);
    console.log(carrito);
    let carritoJson = JSON.stringify(carrito)
    localStorage.setItem ("carrito" , carritoJson)
    
    mostrarCarrito();
}

function borrar_producto  (e) {
    
    console.log("para borrar" , e.target)
    let abuelo = e.target.parentNode.parentNode
    abuelo.remove();
    let numeroBevida = abuelo.querySelector("p").textContent
   

    function sacarDelCarito (producto){
        return (producto.cantidad - 1)!= numeroBevida 
        
    } 
    let resultado_filter = carrito.filter(sacarDelCarito)

    carrito = resultado_filter


}

function mostrarCarrito (){
    let tabla = document.getElementById("carrito_productos")
    tabla.innerHTML = "";
  

    for(let productos of carrito){
        let fila = document.createElement("tr")
        fila.innerHTML = `<td><img src="${productos.foto}"></img></td>
                          <td>${productos.nombre}</td>
                          <td><p>${productos.cantidad++}</p></td>
                          <td>${productos.precio}</td>
                          <td><button class="borrar_elemento">borrar</button></td>`
           
        tablaCompra.append(fila);

        
    }

    let borrar_elemento = document.querySelectorAll(".borrar_elemento")

    for (boton of borrar_elemento){
        boton.addEventListener("click" , borrar_producto)
    }

}



for ( let boton of botonCompra){
    boton.addEventListener("click" , agregarACarrito)

}


let botonDesplegarCarrito = document.getElementById("carrito");

botonDesplegarCarrito.addEventListener ("click" , function(){
    let carrito_desplegado = document.getElementById("mostrarCarrito")
    if(carrito_desplegado.style.display != "none"){
        carrito_desplegado.style.display = "none"
    }
    else{
        carrito_desplegado.style.display = "block"
    }

})


carrito.splice(0,1)
