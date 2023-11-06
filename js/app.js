console.log("Conectado");

let nombreUsuario = prompt("Bienvenido a Guarida de Lobos, por favor ingresá tu nombre:");

while (!nombreUsuario || typeof nombreUsuario !== 'string' || !isNaN(nombreUsuario)) {
    nombreUsuario = prompt("Por favor, ingresá un nombre válido:");
}
alert("Bienvenido " + nombreUsuario);

let edad;

while (true) {
    let input = prompt("Ingrese su edad:");

    // Me sirve para verificar si el input es un número y no está vacío
    if (!isNaN(input) && input !== "") {
        // Para convertir el input a número
        edad = parseInt(input);

        if (edad >= 18) {
            alert("Bienvenido, ¿qué curso o experiencia querés comprar hoy?");
            break;
        } else {
            alert("Sos menor de edad, recordá que para comprar necesitás una autorización de un adulto.");
            break;
        }
    } else {
        alert("Por favor, ingrese un valor numérico para la edad.");
    }
}

