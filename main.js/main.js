
const string1 = "HOLA";
const string2 = "COMO ESTAS";
const string3 = ",";


const saludo = string1 + string2;

const saludoConEspacios = string1 + string3 + string2;


console.log (saludoConEspacios);


// const nombre = prompt("Ingrese un producto");

// switch (nombre) {
//     case "Procesador ryzen 5":
//     console.log("El precio de producto es $150.000");
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es 165.000")
//     break;
    
//     case "Procesador intel i5":
//     console.log("El precio del producto es $155.000")
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es $185.000")
//     break;
//     case "Procesador ryzen 7":
//     console.log("El precio del producto es $250.000")
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es $275.000")
//     break;
//     case "Procesador intel i7":
//     console.log("El precio del producto es $400.000")
//     console.log("El precio con transferencia o debito se mantiene");
//     console.log("El precio de lista es $440.000")
//     break;

//     default:
//         console.log("Sin stock");
//         break;
    
       
// }
// const producto = prompt("Ingrese el cooler que necesita");

// switch (producto) {
//     case "Cooler gama baja":
//     console.log("El precio del producto es $40.000");
//     console.log("El precio con transferencia se mantiene");
//     console.log("El precio de lista es 55.000")
//     break;
    
//     case "Cooler gama media":
//     console.log("El precio del producto es $65.000")
//     console.log("El precio en 3 cuotas sin interes");
//     console.log("El precio en 6 cuotas con interes es de $80.000")
//     break;

//     case "Cooler gama alta":
//     console.log("El precio del producto es $110.000")
//     console.log("El precio en 3 cuotas sin interes");
//     console.log("El precio en 6 cuotas con interes es de $125.000")
//     break;

//     default:
//         console.log("Sin stock");
//         break;
//     }

// let operacion = prompt("Ingrese la operacion a realizar. \n+ Para sumar los productos\n INGRESE CUALQUIER LETRA PARA SALIR");

// while( operacion == "+") {

//     const numero1 = parseInt(prompt("Ingrese el numero"));
//     const numero2 = parseInt(prompt("Ingrese el numero"));

//     switch(operacion) {

//         case "+":
//         console.log("La suma es: " + (numero1 + numero2));
//       break;

//        default: 
//        alert("Operacion no valida");
//         break;
//         }

//         operacion = prompt("Ingrese la operacion a realizar. \n+ Para suma\n- para resta\n* para multiplicacion\n INGRESE CUALQUIER LETRA PARA SALIR");
//    }

// Base de datos de productos en formato JSON

//TERCERA PREENTREGA


//funciones

function agregarProductoAlCarrito(producto, cantidad) {

    const indiceProductoCarrito = carrito.findIndex( (el) =>{
        return el.nombre === producto.nombre;
    } );

    if (indiceProductoCarrito === -1){
        carrito.push({
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: cantidad,

        });
    }


} else {

    carrito[indiceProductoCarrito].cantidad += cantidad;
}

function renderizarProductos(productos) {
    contenedor.innerHTML = "";

    for (const producto of productos) {

        const div = document.createElement("div");
        div.className = "producto";
         div.innerHTML = <h4>${productos.nombre}</h4> ;

        const input = document.createElement("input");
        input.placeholder = "Cantidad";
        input.type = "number";

        const button = document.createElement("button");
        button.innerText = "Agregar"; 
        button.addEventListener("click", () => {
            const cantidad = parent(input.value);
            console.log(cantidad);

        });



        div.append(input, button);

        contenedor.append(div);

    }


}




const contenedor = document.getElementById("contenedor");


const productos = [
    new producto ("Invictus", 8000, 10),
    new producto ("One Million", 8000, 10),
    new producto ("Good Girl", 8000, 10),
    new producto ("Scandal", 8000, 10),

]



























