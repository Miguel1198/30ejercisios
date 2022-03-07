//EJERCICIO 16.- Ingresar un número y mostrar la suma de todos los pares e impares desde 0 hasta el número ingresado.

function SumaImPar() {
  let num = parseFloat(document.getElementById("num").value);
  let par = 0;
  let impar = 0;
  let contador = 0;

  while (contador <= num) {
    if (contador % 2 == 1) {
      impar += contador;
    } else {
      par += contador;
    }
    contador++;
  }

  console.log("Del número " + num + " en suma de pares es: " + par);
  console.log("Del número " + num + " en suma de impares es: " + impar);
}

//EJERCICIO 17.- Hacer un algoritmo que muestre el promedio de varias notas o de N notas ingresadas, se debe definir el valor de N para conocer la cantidad de notas a ingresar.

function nNotas() {
  let notas = parseInt(prompt("Ingrese el número de calificaciones"));
  let suma = 0;
  let contador = 1;
  while (contador <= notas) {
    let cali = parseFloat(prompt("Nota: " + contador));
    suma += cali;
    promedio = suma / notas;
    contador++;
  }
  console.log(
    "El número de notas es: " + notas + ", su promedio es " + promedio
  );
}

//EJERCICIO 18.-Hacer un programa que muestre el mayor de 10 números ingresados
function nMayor() {
  let mayor = 0;
  let contador = 1;
  while (contador <= 10) {
    let num = parseInt(prompt("Ingrese el número " + contador));
    if (mayor < num) {
      mayor = num;
    }
    contador++;
  }
  console.log("Este es el número mayor: " + mayor);
}

//EJERCICIO 19.- Hacer un programa que ordene los números ingresados de mayor a menor y de menor a mayor.

function order() {
  let numeros = [];
  let n = parseInt(prompt("Ingrese el primer número"));
  numeros.push(n);

  while (confirm("¿Qué número desea agregar?")) {
    let n = parseInt(prompt("Siguiente número"));
    numeros.push(n);
  }
  return console.log({
    asc: numeros.map((el) => el).sort(),
    desc: numeros
      .map((el) => el)
      .sort()
      .reverse(),
  });
}

//EJERCICIO 20. Diseñe un algoritmo que lea un numero de 3 cifra y determine si es o no palindromono.

function palindromo() {
  let num = parseFloat(prompt("Ingrese un número de 3 cifras"));
  let d1 = (num - (num % 100)) / 100;
  let r1 = num % 100;
  let d2 = (r1 - (r1 % 10)) / 10;
  let d3 = r1 % 10;

  if ((num = d3 * 100 + d2 * 10 + d1)) {
    console.log("El numero es palindromo");
  } else {
    console.log("El numero no es palindromo");
  }
}
