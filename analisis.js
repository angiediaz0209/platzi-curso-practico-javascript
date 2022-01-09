//Functions Helpers

function isEven(number) {
  return (number % 2 === 0);
}

function mediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//Calculadora de mediana

function medianaSalarios(list) {
  const middle = parseInt(list.length / 2);
  
  if (isEven(list.length)) {
    const personMiddle1 = list[middle - 1];
    const personMiddle2 = list[middle];

    const arrayPeopleMiddle1and2 = [personMiddle1, personMiddle2];

    const mediana = mediaAritmetica(arrayPeopleMiddle1and2);
    return mediana;

  } else {
    const personMiddle = lista[middle];
    return personMiddle;
  }
}
  
  //Mediana General
  
const salariosCol = colombia.map(
  function (person) {
    return person.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del Top 10%



const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
  medianaGeneralCol,
  medianaTop10Col,
}); 