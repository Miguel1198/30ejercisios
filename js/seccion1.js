//Problema 1: Ingrese dos números y realice una suma con los mismos.
function sumar() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let suma = n1 + n2;
  window.alert(suma);
}

//Problema 2: Realizar un programa en el que se ingresen los datos de un trabajador y nos de como resultado el sueldo que debe obtener en base a sus horas trabajadas.

function sueldo() {
  let nombre = document.getElementById("nombre").value;
  let horasT = parseFloat(document.getElementById("horasT").value);
  let pxH = parseFloat(document.getElementById("pxH").value);
  let sueldo = horasT * pxH;
  window.alert("El trabajador " + nombre + " va a tener como sueldo " + sueldo);
}

//Problema 3: Realizar un programa en el que se calcule la cuenta a pagar en base a su precio y cantidad después sacar el 10% de descuento para el total a pagar.

function pagar() {
  let product = prompt("Nombre del producto");
  let unidadesP = parseFloat(document.getElementById("unidadesP").value);
  let unidades = parseFloat(document.getElementById("unidades").value);

  let subtotal = unidadesP * unidades;
  let descuento = subtotal * 0.1;
  let total = subtotal - descuento;

  alert(
    `Por ${product}, 
    El subtotal es ${subtotal},
    El descuento es: ${descuento}, 
    El total es ${total}`
  );
}

//Problema4: Calcular el área de un rectángulo, en un programa.
function calcularT() {
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let area = base * altura;
  let perimetro = 2 * base + 2 * altura;

  alert("El area del rectangulo es de: " + area);
  alert("El perimetro del rectangulo es de: " + perimetro);
}

//Problema 5 Hacer un programa para calcular el promedio de 3 notas, si el promedio es menor a 6.95 se lo considera REPROBADO caso contrario Aprobado

function promediar() {
  let nombre = prompt("Ingrese el nombre del alumno");
  let n1 = parseFloat(document.getElementById("not1").value);
  let n2 = parseFloat(document.getElementById("not2").value);
  let n3 = parseFloat(document.getElementById("not3").value);

  let notas = (n1 + n2 + n3) / 3;

  if (notas >= 6.95) {
    window.alert(
      "La nota final del estudiante " +
        nombre +
        " es " +
        notas +
        " esta Aprobado"
    );
  } else {
    window.alert(
      "La nota final del estudiante " +
        nombre +
        " es " +
        notas +
        " esta REPROBADO"
    );
  }
}
