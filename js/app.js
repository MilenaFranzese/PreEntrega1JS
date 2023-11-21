console.log("Conectado");

function verificarEdad() {
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
}

verificarEdad();

////////////////////////////////// Segunda PreEntrega //////////////////////////////////////////

function Experiencia(nombre, duracion, precio) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.precio = precio;
}

var aladelta = new Experiencia("Aladelta", "15/20 minutos aprox.", 20000);
var parapente = new Experiencia("Parapente", "20 minutos", 22000);
var paracaidismo = new Experiencia("Paracaidismo", "20 minutos de ascenso en avión, 50 segundos aprox. de caida libre y 10 minutos aprox. de aterrizaje", 120000);
var paramotor = new Experiencia("Paramotor", "15 minutos", 18000);

parapente.duracion = "20 minutos aprox., depende de las ráfagas del viento"

var experienciaArray = [aladelta, parapente, paracaidismo, paramotor];

experienciaArray.forEach(function(experiencia) {
    console.log("Experiencia: " + experiencia.nombre);
    console.log("Duración: " + experiencia.duracion);
    console.log("Precio: $" + experiencia.precio);
    console.log("-------------");
});

function Curso(nombre, duracion2, precio2){
    this.nombre = nombre;
    this.duracion2 = duracion2;
    this.precio2 = precio2;
}

var aladelta = new Curso("Aladelta", "4 meses", 300000);
var parapente = new Curso("Parapente", "3 meses", 265000);
var paracaidismo = new Curso("Paracaidismo", "6 meses", 900000);
var paramotor = new Curso("Paramotor", "5 meses", 350000);

var cursosArray = [aladelta, parapente, paracaidismo, paramotor];

cursosArray.forEach(function(cursos) {
    console.log("Curso: " + cursos.nombre);
    console.log("Duración: " + cursos.duracion2);
    console.log("Precio: $" + cursos.precio2);
    console.log("-------------");
});