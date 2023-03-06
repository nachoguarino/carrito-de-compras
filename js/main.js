function calcularTotal(carrito) {

    let total = 0
    carrito.forEach(servicio => {

        total += servicio.precio * servicio.cantidad

    });
    return total
}

const carrito = []
const listaServicios = [

    { id: 1, servicio: "mix", precio: 10000, cantidad: 0 },
    { id: 2, servicio: "mix y mastering", precio: 15000, cantidad: 0 },
    { id: 3, servicio: "beat personalizado", precio: 8000, cantidad: 0 },
];

let serviciosPrestados = ""
listaServicios.forEach(servicio => {

    serviciosPrestados += "ID: " + servicio.id + " servicio de: " + servicio.servicio + " precio: $" + servicio.precio + "\n"

});

alert(serviciosPrestados)

let seguirComprando = true
while (seguirComprando) {
    let id = prompt("Ingrese el ID del servicio deseado");
    if (!isNaN(id) && listaServicios.some(servicio => servicio.id == id)) {

        let cantidad = prompt("Ingrese cuántos servicios de este tipo necesita")
        let servicio = listaServicios.find(servicio => servicio.id == id)
        servicio.cantidad = parseInt(cantidad)
        carrito.push(servicio)
        let total = calcularTotal(carrito)
        alert("El total de su compra hasta ahora es de: $" + total)
        seguirComprando = confirm("¿Desea seguir comprando?")

    } else {
        alert("El ID ingresado es incorrecto")
    }
}

let totalFinal = calcularTotal(carrito)
alert("El total de su compra es de: $" + totalFinal)





