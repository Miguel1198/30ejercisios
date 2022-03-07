//EJERCICIO 21.- Comprobar que un numero de 4 y de 5 dígitos es palíndromo

const palindromo = () => {
  let num = parseFloat(prompt("Ingrese un número de 4 o de 5 dígitos"));
  let span = document.querySelector("span");
  let nVolteado = parseFloat(num.toString().split("").reverse().join(""));

  if (num < 999 || num > 99999) {
    span.innerHTML = "No es un dato valido";
  } else {
    if (num == nVolteado) {
      span.innerHTML = "El número " + num + " Si es palindromo";
    } else {
      span.innerHTML = "El número " + num + " No es palindromo";
    }
  }
};

//EJERCICIO 22.- REALIZAR UN PROGRAMA QUE MUESTRE LA SERIE DE FIBONACCI
function fibonacci() {
  let num = parseFloat(prompt("Ingrese un número"));
  let a = 0;
  let b = 1;
  let contador = 1;
  while (contador <= num) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
    contador++;
  }
}

//EJERCICIO 23.-HACER UN ALGORITMO QUE NOS CALCULE LA SUMA DE LOS N PRIMEROS NÚMEROS PARES SIGUIENTES AL NÚMERO. ES DECIR; SI INSERTAMOS UN 5, NOS HAGA LA SUMA DE 6+8+10+12+14.
function sumaSiguientesPares() {
  let num = parseFloat(prompt("Ingrese un número"));
  let vf = num + 10;
  let suma = 0;
  let p = document.querySelector("p");

  while (num < vf) {
    if (num % 2 == 0) {
      suma = suma + num;
      console.log(num);
    }
    num++;
  }
  p.innerHTML = "La sumatoria total de los números pares es " + suma;
}

//EJERCICIO 24.- DIGITALIZAR UN ALGORITMO QUE VIZUALICE LA CUENTA DE LOS NÚMEROS QUE SON MÚLTIPLOS DE 2 O 3 QUE HAY ENTRE 1 Y 100.

function divisiblesDosTres() {
  let dos = 0;
  let tres = 0;
  let contador = 1;
  let b = document.querySelector("b");

  while (contador <= 100) {
    if (contador % 2 === 0) {
      console.log("Este número es divisible para 2: " + contador);
      dos++;
    }
    if (contador % 3 === 0) {
      console.log("Este número es divisible para 3: " + contador);
      tres++;
    }
    contador++;
  }
  b.innerHTML = `El total de números divisibles para 2 es <span>${dos}</span> <br> El total de números divisibles para 3 es: <span>${tres}</span>
  `;
  alert("Revise en la consola para ver los números divisibles para 2 o para 3");
}

//EJERCICIO 25.- ELABORAR UN PROGRAMA QUE INGRESE 3 NÚMEROS Y MUESTRE EL NÚMERO INTERMEDIO.

function nMedio() {
  let x = parseInt(prompt("Ingrese el primer número"));
  let y = parseInt(prompt("Ingrese el segundo número"));
  let z = parseInt(prompt("Ingrese el tercer número"));
  let p = document.getElementById("p");

  if ((x > y && x < z) || (x < y && x > z)) {
    p.innerHTML = "El numero medio es: " + x;
  } else if ((y > x && y < z) || (y < x && y > z)) {
    p.innerHTML = "El numero medio es: " + y;
  } else if ((z > x && z < y) || (z < x && z > y)) {
    p.innerHTML = "El numero medio es: " + z;
  } else {
    p.innerHTML = "Son iguales o es un dato no valido";
  }
}
