//EJERCICIO 26.- MOSTRAR EL COSTO A PAGAR POR UNA LLAMADA TELEFÓNICA, SEGÚN LA ZONA DE DESTINO Y LA DURACIÓN EN MINUTOS CON SUS RESPECTIVAS RESTRICCIONES.

function call() {
  let tiempoLlamada, total, paises;
  paises = parseInt(
    prompt(
      "Escoja la clave hacia a donde llamar: (1) - 0.13$ - Estados Unidos, (2) - 0.11$ -Canada, (5) - 0.52$ -América del Sur, (6) - 0.99$ -América Central, (8) - 0.17$ -Mexico, (9) - 0.17$ -Europa, (10) - 0.20$ -Asia, (15) - 0.59$ -África, (20) - 0.28$ -Oceaniá"
    )
  );
  let b = document.querySelector("b");
  switch (paises) {
    case 1:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.13 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de:" + total + "$";
      break;
    case 2:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.11 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 5:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.52 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 6:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.99 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 8:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.17 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 9:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.17 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 10:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.2 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 15:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.59 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    case 20:
      tiempoLlamada = parseFloat(prompt("¿Cuantos minutos duro la llamada?"));
      total = 0.28 * tiempoLlamada;
      b.innerHTML = "Su total a pagar es de: " + total + "$";
      break;
    default:
      alert(
        "El país que usted intenta llamar esta fuera de servicio o no esta disponible, intentelo mas tarde..."
      );
      break;
  }
}

//EJERCICIO 27.- HACER UN ALGORITMO QUE MUESTRE EL PROMEDIO DE VARIAS NOTAS O DE N NOTAS INGRESADAS, SE DEBE DEFINIR EL VALOR DE N PARA CONOCER LA CANTIDAD DE NOTAS A INGRESA

function promediar() {
  let n = parseInt(prompt("Ingrese el número de calificaciones"));
  let p = document.querySelector("p");
  let suma = 0;
  let contador = 1;
  let promedio;
  while (contador <= n) {
    let calificacion = parseFloat(prompt("Ingrese la nota " + contador));
    suma += calificacion;
    promedio = suma / n;
    contador++;
  }
  p.innerHTML = "Su promedio es " + promedio;
}

//EJERCICIO 28.- REALIZAR UN PROGRAMA QUE VERIFIQUE SI UN NUMERO CUALQUIERA ES PALINDROMO O NO CON LAS DEBIDAS EXEPCIONES A LA REGLA

const palindromo = () => {
  let num = parseFloat(
    prompt("Ingrese un número dpara verificar si es o no palindromo")
  );
  let span = document.querySelector("span");
  let nVolteado = parseFloat(num.toString().split("").reverse().join(""));

  if (num == nVolteado) {
    span.innerHTML = "El número " + num + " Si es palindromo";
  } else {
    span.innerHTML = "El número " + num + " No es palindromo";
  }
};

//EJERCICIO 29.-REALIZAR UN PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE NUMERICA GRAFICA:

function piramide() {
  let num = parseInt(prompt("Introduce el numero de filas de la piramide"));
  for (let i = num; i >= 1; i--) {
    for (let j = i; j >= 1; j--) {
      document.write(i);
    }
    document.write("<br>");
  }
}

// Realizar un programaque muestre la siguiente grafica

function grafiK() {
  let num = parseInt(prompt("Ingrese un numero"));
  let cont;
  let acumulador;

  if (num < 3) {
    alert("La grafica empieza a partir del tercer número");
  } else {
    cont = num;
    acumulador = "";

    for (let a = 1; a <= 3; a++) {
      acumulador = document.write("<br>");
      for (let b = 1; b <= cont; b++) {
        acumulador = acumulador + " * ";
      }
      cont = cont - 1;
      document.write(acumulador);
    }
    cont = cont + 1;
    for (let d = 1; d <= 2; d++) {
      acumulador = document.write("<br>");
      cont = cont + 1;
      for (let e = 1; e <= cont; e++) {
        acumulador = acumulador + " * ";
      }
      document.write(acumulador);
    }
  }
}
