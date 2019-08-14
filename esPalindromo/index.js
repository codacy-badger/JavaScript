
let arraySinEspacios  = (cadena) => cadena.slice().split("").filter( (letra) => letra !== " ");

let cadenaEnMinuscula = (cadena) => cadena.join("").toLowerCase();

let sonIguales        = (cadena1, cadena2) => cadenaEnMinuscula(cadena1) === cadenaEnMinuscula(cadena2);

function esPalindromo(cadena) {

    let cadenaOrginal = arraySinEspacios(cadena);
    let cadenaAlReves = arraySinEspacios(cadena).reverse();

    sonIguales(cadenaOrginal, cadenaAlReves)? document.write("Es es palindromo") : document.write("No es palindromo");
}


let cadena = prompt("Ingrese la cadena");

esPalindromo(cadena);
