//EJERCICO 11 Ingrese la cantidad de alumnos aprobados y desaprobados de un curso, luego mostrar el porcentaje de estudiantes aprobados y el porcentaje de estudiantes desaprobados.
//Algoritmo porcentual de estudiantes aprobados y desaprobados

function porcetajEstudiantes() {
  let aprovados = parseFloat(document.getElementById("aprovados").value);
  let desaprovados = parseFloat(document.getElementById("desaprovados").value);

  let cantidadAlumnos = aprovados + desaprovados;
  let alumnosAprov = (aprovados * 100) / cantidadAlumnos;
  let alumnosDesaprov = (desaprovados * 100) / cantidadAlumnos;

  console.log("El numero total de estudiantes es " + cantidadAlumnos);
  console.log("Los estudiantes aprovados son: " + alumnosAprov);
  console.log("Los estudiantes desaprovados son: " + alumnosDesaprov);
}

//EJERCICO 12.- Hacer un programa que muestre el área y perímetro de un círculo.

function circulo() {
  let radio = parseFloat(document.getElementById("radio").value);

  let area = 3.1416 * radio * radio;
  let perimetro = 2 * 3.1416 * radio;

  console.log("El area del circulo es: " + area);
  console.log("El perimetro del circulo es: " + perimetro);
}

//EJERCICIO 13.- Ingresar tres números enteros y mostrar el mayor de ellos.

function may() {
  let may = 0;
  let contador = 1;

  while (contador <= 3) {
    let n = parseFloat(prompt("Ingrese un numero " + contador));
    if (may < n) {
      may = n;
    }
    contador++;
  }
  console.log("El Número mayor es: " + may);
}

//EJERCICIO 14.- Se pide ingresar el sueldo de un trabajador y su categoría, dependiendo de la categoría se le dará una bonificación en el neto a pagar.
//Bonificación por categoría: A = 10%; B = 20%; C = 30%; D = 50%

function SalioxCategoria() {
  let categoria = document.getElementById("categoria").value;
  let sueldo = parseFloat(document.getElementById("sueldo").value);

  switch (categoria) {
    case "A":
      console.log("Su cotización es " + sueldo * 0.1);
      break;
    case "B":
      console.log("Su cotización es " + sueldo * 0.2);
      break;
    case "C":
      console.log("Su cotización es " + sueldo * 0.3);
      break;
    case "D":
      console.log("Su cotización es " + sueldo * 0.5);
      break;
    default:
      alert("Opción incorrecta");
      break;
  }
}

//EJERCICIO 15.- Elaborar un programa que permita ingresar 10 número enteros y muestre la cantidad de números pares e impares ingresados.

function parImpar() {
  let pares = 0;
  let impares = 0;
  let contador = 1;

  while (contador <= 10) {
    let n = parseFloat(prompt("Ingrese el número " + contador));
    if (n % 2 === 1) {
      impares += 1;
    } else {
      pares += 1;
    }
    contador++;
  }
  console.log("El total de números impares es:" + impares);
  console.log("El total de números pares es:" + pares);
}
