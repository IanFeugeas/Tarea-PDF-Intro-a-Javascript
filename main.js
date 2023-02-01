// 1)
let miNombre = "Ian Fabricio";

// console.log(miNombre);

// 2)
let miApellido = "Feugeas";

// console.log(miApellido);

// 3)
let miEdad = 25;

// console.log(miEdad);

// 4)
let miMascota = "LeonBebe";

// console.log(miMascota);

// 5)
let edadMascota = 4;

// console.log(edadMascota);

// 6)
// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(edadMascota);
// 7)
let nombreCompleto;
nombreCompleto = `${miNombre} ${miApellido}`;

// console.log(nombreCompleto);

// 8)
let textoPresentacion;
textoPresentacion = ` Hola, mi nombre es ${nombreCompleto}, tengo ${miEdad} años y un gatito que se llama ${miMascota} que tiene ${edadMascota} meses`;

// console.log(textoPresentacion);

// 9)
let sumaEdades;
sumaEdades = miEdad + edadMascota;

// console.log(sumaEdades);

let restaEdades;
restaEdades = miEdad - edadMascota;

// console.log(restaEdades);

let productoEdades;
productoEdades = miEdad * edadMascota;

// console.log(productoEdades);

let divisionEdades;
divisionEdades = miEdad / edadMascota;

// console.log(divisionEdades);

// 10)
// miNombre = prompt("Ingrese su nombre");
// // console.log(miNombre);

// miApellido = prompt("Ingrese su apellido");
// // console.log(miApellido);

// miEdad = parseInt(prompt("Ingrese su edad"));
// // console.log(miEdad);

// miMascota = prompt("Nombre de su Mascota");
// // console.log(miMascota);

// edadMascota = parseInt(prompt("Edad de su mascota"));
// // console.log(edadMascota);

// console.log(miNombre);
// console.log(miApellido);
// console.log(miEdad);
// console.log(miMascota);
// console.log(edadMascota);

// let nombreUsuarioCompleto = miNombre + " " + miApellido;
// console.log(nombreUsuarioCompleto);

// let textoPresentacionUsuario = ` Hola, mi nombre es ${nombreCompleto}, tengo ${miEdad} años y un gatito que se llama ${miMascota} que tiene ${edadMascota}`;

// sumaEdades = miEdad + edadMascota;
// console.log(sumaEdades);

// restaEdades = miEdad - edadMascota;
// console.log(restaEdades);

// productoEdades = miEdad * edadMascota;
// console.log(productoEdades);

// divisionEdades = miEdad / edadMascota;
// console.log(divisionEdades);

// 11)

// const alumno = {
//   nombre: "Ian Fabricio",
//   apellido: "Feugeas",
//   edad: 25,
//   materiaPreferida: "Matematicas",
//   hobbie: "futbol",
// };
// console.table(alumno);
// console.log(alumno.nombre);
// console.log(alumno.apellido);
// console.log(alumno.edad);
// console.log(alumno.materiaPreferida);
// console.log(alumno.hobbie);

// 12)

// const mascota = {
//   nombre: "Leon",
//   tipo: "gato",
//   edad: 4,
//   color: "marron y negro atigrado",
//   pesoEnKg: 1,
// };

// console.table(mascota);
// console.log(mascota.nombre);
// console.log(mascota.tipo);
// console.log(mascota.edad);
// console.log(mascota.color);
// console.log(mascota.pesoEnKg);

// 13)

// const frutas = ["manzana", "banana", "naranja", "sandia", "mandarina"];
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);
// console.log(frutas[4]);

// 14)

// const numeros = [10, 15, 20, 25, 30];
// console.log(numeros);
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

// 15)

// const familia = ["madre", "padre", "hijoMayor", "hijoMenor", "abuela"];
// console.log(familia);
// console.log(familia[0]);
// console.log(familia[1]);
// console.log(familia[2]);
// console.log(familia[3]);
// console.log(familia[4]);

// // 16)

// let textoAleatorio;
// textoAleatorio = frutas[0] + " " + numeros[3] + " " + familia[4];
// console.log(textoAleatorio);

// 17)

// let miEDad;
// miEdad = parseInt(prompt("Introduzca su edad"));
// // console.log(miEdad);

// let edadCompañero;
// edadCompañero = parseInt(prompt("Introduzca la edad de un compañero"));
// // console.log(edadCompañero);

// let edadesIguales;
// edadesIguales = miEdad === edadCompañero;

// console.log("Mi edad es igual a la de mi compañero:" + " " + edadesIguales);

// let soyMayor;
// soyMayor = miEdad > edadCompañero;

// console.log("Mi edad es mayor a la de mi compañero:" + " " + soyMayor);

// let soyMenor;
// soyMenor = miEdad < edadCompañero;
// console.log("Mi edad es menor a la de mi compañero:" + " " + soyMenor);

// 18)

// let soyMayorDeEdad = parseInt(prompt("Ingrese su edad"));
// if (soyMayorDeEdad >= 18) {
//   console.log("Soy mayor de edad" + " " + soyMayorDeEdad);
// }

// 19)

// let edad = parseInt(prompt("Ingrese su edad"));
// let altura = parseInt(prompt("Ingrese su altura"));

// let puedeSubir = edad >= 6 && altura >= 120;

// console.log("Puede subir a la atraccion" + " " + puedeSubir);

// 20)

// let tipoDePase = prompt("Ingrese tipo de pase");
// let saldo = parseInt(prompt("Ingrese su saldo"));

// let puedePasar = tipoDePase.toLowerCase() === "vip" || saldo >= 1000;
// console.log("La persona puede pasar" + " " + puedePasar);
