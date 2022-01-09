function mediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

function calcularMediaAritmetica() {
  const inputListaPromedio = document.getElementById("InputListaPromedio");
  const valueInputListaPromedio = inputListaPromedio.value;

  let arrayPromedio = Array.from(valueInputListaPromedio.split(","), Number);

  const listaOrdenada = arrayPromedio.sort((numMenor, numMayor) => numMenor - numMayor);

  const promedio = mediaAritmetica(listaOrdenada);

  const resultPromedio = document.getElementById("ResultPromedio");
  resultPromedio.innerText = "El promedio es de: " + promedio;

};

//Calcular Mediana


function mediana(listaMediana) {
  const mitadListaMediana = parseInt(listaMediana.length / 2);
  
  function isEven(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let mediana;

  if(isEven(listaMediana.length)) {
        const elemento1 = listaMediana [mitadListaMediana - 1];
        const elemento2 = listaMediana [mitadListaMediana];

        const promedio = mediaAritmetica([
                elemento1,
                elemento2,
              ]);

        mediana = promedio;

      } else {
        mediana = listaMediana[mitadListaMediana];
      }
  return mediana;
}

function calcularMediana() {
  const inputLista = document.getElementById("InputListaMediana");
  const valueLista = inputLista.value;

  // convertimos en valores numericos
  let arrayMediana = Array.from(valueLista.split(","), Number);

  // ordenamos la lista de menor a mayor con sort

  const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor);

  const calculoMediana = mediana(listaOrdenada);

  const resultMediana = document.getElementById("ResultMediana");
  resultMediana.innerText = `La mediana es de: ` + calculoMediana;

}

//Calcular la moda

function moda(listModa) {
  const listModaCount = {};
  listModa.map(
    function(elemento) {
      if (listModaCount[elemento]) {
        listModaCount[elemento] += 1;
      } else {
        listModaCount[elemento] = 1;
      }
    }
  );
  const listModaArray = Object.entries(listModaCount).sort(
    function(elementoA, elementoB){
      return elementoA[1] - elementoB[1];
    }
  );
  const moda = listModaArray[listModaArray.length - 1];
  return moda;
};


function calcularModa() {
  const inputListaModa = document.getElementById("InputListaModa");
  const valueInputListaModa = inputListaModa.value;

  let arrayModa = Array.from(valueInputListaModa.split(","), Number);

  const modaElements = moda(arrayModa);

  const modaSpecific = modaElements[0];

  const resultModa = document.getElementById("ResultModa");
  resultModa.innerText = `La moda es: ` + modaSpecific;
};
