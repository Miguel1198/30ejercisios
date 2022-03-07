//Problema6: Escribir un programa que nos indique si la letra ingresada es vocal o consonante

function lv() {
  let letraVocal = prompt("Ingrese una letra o vocal");
  switch (letraVocal) {
    case ("A", "a"):
      alert("Es vocal");
      break;
    case ("E", "e"):
      alert("Es vocal");
      break;
    case ("I", "i"):
      alert("Es vocal");
      break;
    case ("O", "o"):
      alert("Es vocal");
      break;
    case ("U", "u"):
      alert("Es vocal");
      break;

    default:
      alert("Es una letra");
      break;
  }
}

//Problema 7 Mostrar el costo a pagar por una llamada telefónica, según la zona y la duración en minutos

function llamar() {
  let llamada, costo;
  let pais = parseInt(
    prompt(
      "A que pais llamo, (1)Estados Unidos, (2)Canada, (3)España, (4)Colombia, (5)Venezuela, (6)Mexico, (7)Argentina, (8)Panama"
    )
  );

  switch (pais) {
    case 1:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.15 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 2:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.14 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 3:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.25 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 4:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.05 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 5:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.1 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 6:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.11 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 7:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.12 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    case 8:
      llamada = parseInt(prompt("¿Cuantos minutos duro la llamada?"));
      costo = 0.08 * llamada;
      alert("Su total a pagar es de: " + costo + "$");
      break;
    default:
      window.alert("No hay llamadas para ese pais");
      break;
  }
}

//Problema 8 Realizar un programa que clasifiqué a partir de la nota si un estudiante Desaprobado; 5-7: Aprobado; 8-9: Excelente y 10: BECADO

function nota() {
  let name = prompt("Alumno:");
  let cali = parseFloat(prompt("Ingrese la calificación del alumno"));

  if (cali >= 0 && cali <= 2) {
    alert(`El estudiante: ${name}, Necesita Reforzamiento`);
  } else if (cali >= 3 && cali <= 4) {
    alert(`El estudiante: ${name}, Esta Desaprobado`);
  } else if (cali >= 5 && cali <= 7) {
    alert(`El estudiante: ${name}, Esta aprobado`);
  } else if (cali >= 8 && cali <= 9) {
    alert(`El estudiante: ${name}, Tiene un promedio EXCELENTE`);
  } else if (cali == 10) {
    alert(`El estudiante: ${name}, Esta BECADO`);
  } else {
    alert("Nota no valida volver a ingresar");
  }
}

//Problema 9 La suma de n números naturales, donde n es el numero limite que ingresa el usuario.

function n() {
  let n = parseInt(prompt("Ingrese un numero:"));
  let suma = 0;

  for (let i = 0; i <= n; i++) {
    suma += i;
    document.write(" + " + i + "<br>");
  }
  document.write(" = " + suma);
}

//Año biciesto y comprobar si es fecha valida");
function date() {
  let dia = parseInt(prompt("Aquí va el día"));
  let mes = parseInt(prompt("Aquí va el mes"));
  let anio = parseInt(prompt("Aquí va el año"));
  let b;

  if (
    anio >= 1582 &&
    anio <= 3000 &&
    mes >= 1 &&
    mes <= 30 &&
    dia >= 1 &&
    dia <= 31
  ) {
    if ((anio % 4 == 0 && anio % 100 !== 0) || anio % 400 == 0) {
      console.log("AÑO BISIESTO");
      b == 0;
    } else {
      console.log("NO ES BISIESTO");
      b == 1;
    }
    if (b === 0) {
      switch (mes) {
        case (1, 3, 5, 7, 8, 10, 12):
          if (dia >= 1 && dia <= 31) {
            console.log("FECHA CORRECTA");
          } else {
            console.log("FECHA NO CORRECTA");
          }
          break;

        case 2:
          if (dia >= 1 && dia <= 29) {
            console.log("FECHA CORRECTA");
          } else {
            console.log("FECHA NO CORRECTA");
          }
          break;

        case (4, 6, 9, 11):
          if (dia >= 1 && dia <= 30) {
            console.log("FECHA CORRECTA");
          } else {
            console.log("FECHA NO CORRECTA");
          }
          break;
      }
    } else {
      switch (mes) {
        case (1, 3, 5, 7, 8, 10, 12):
          if (dia >= 1 && dia <= 31) {
            console.log("FECHA CORRECTA");
          } else {
            console.log("FECHA NO CORRECTA");
          }
          break;

        case 2:
          if (dia >= 1 && dia <= 28) {
            console.log("FECHA CORRECTA");
          } else {
            console.log("FECHA NO CORRECTA");
          }
          break;

        case (4, 6, 9, 11):
          if (dia >= 1 && dia <= 30) {
            console.log("FECHA CORRECTA");
          } else {
            console.log("FECHA NO CORRECTA");
          }
          break;
      }
    }
  } else {
    console.log("Upss, la fecha parace haber tenido un error");
  }
}
