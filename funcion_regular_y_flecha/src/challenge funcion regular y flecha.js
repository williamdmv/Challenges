//Creacion de una funcion regular y de flecha que recibe
//un numeroe imprimirá en 
//consola si ese número es 
//par o impar

function esParOImparRegular(numero) {
  if (numero % 2 === 0) {
    console.log(numero + ' es un número par.');
  } else {
    console.log(numero + ' es un número impar.');
  }
}

const esParOImparArrow = (numero) => {
  if (numero % 2 === 0) {
    console.log(numero + ' es un número par.');
  } else {
    console.log(numero + ' es un número impar.');
  }
};

const numeros = [3, 8, 15, 4, 10];

for (const numero of numeros) {
  esParOImparRegular(numero);
  esParOImparArrow(numero);
}
 
