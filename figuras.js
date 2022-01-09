//codigo del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;

}
//console.log("El perimetro cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Codigo del triangulo

console.group("Triangulo")


//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(
//  "Los lados del triangulo miden: " 
//  + ladoTriangulo1
//  + "cm, "
//  + ladoTriangulo2
//  + "cm, "
//  +baseTriangulo
//  + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Triangulo isosceles
function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
      console.error("Los lados a y b no son iguales");
      return "Este triangulo no es isosceles";
  } else {
    const trianguloPequenoLadoB = parseInt(trianguloGrandeLadoB);
    const trianguloPequenoLadoBase = parseInt(trianguloGrandeLadoBase / 2);

    const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloGrandeAltura = Math.sqrt(trianguloPequenoLadoBCuadrado - trianguloPequenoLadoBaseCuadrado);

      return trianguloGrandeAltura;
  }
}






//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del circulo

console.group("Circulos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
  return radio *2;
}
//console.log("El diametro del circulo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es igual a: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  // alert ("EL perimetro del cuadrado es: " + perimetro + "cm");
  const resultSquare = document.getElementById("ResultadoCuadrado");
  resultSquare.innerText = "El perimetro del cuadrado es: " + perimetro;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  // alert ("El area del cuadrado es: " + area + "cm^2" );
  const resultSquare = document.getElementById("ResultadoCuadrado");
  resultSquare.innerText = "El área del cuadrado es: " + area;
}
//Triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("InputTrianguloLado1");
  const inputLado2 = document.getElementById("InputTrianguloLado2");
  const inputBase = document.getElementById("InputTrianguloBase");
  const valueLado1 = inputLado1.value;
  const valueLado2 = inputLado2.value;
  const valueBase = inputBase.value;
  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  // alert ("EL perimetro del triangulo es: " + perimetro + "cm");
  const resultTriangle = document.getElementById("ResultadoTriangulo");
  resultTriangle.innerText = "El perimetro del triangulo es: " + perimetro;
}

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;
  const area = areaTriangulo(valueBase, valueAltura);
  // alert ("El area del triangulo es: " + area + "cm^2");
  const resultTriangle = document.getElementById("ResultadoTriangulo");
  resultTriangle.innerText = "El area del triangulo es: " + area;
}

//Triangulo Isoceles

function calcularAlturaTrianguloIsosceles() {
  const InputTrianguloLado1 = document.getElementById("InputTrianguloLado1");
  const InputTrianguloLado2 = document.getElementById("InputTrianguloLado2");
  const InputTrianguloBase = document.getElementById("InputTrianguloBase");
  const valueLado1 = InputTrianguloLado1.value;
  const valueLado2 = InputTrianguloLado2.value;
  const valueBase = InputTrianguloBase.value;
  const altura = alturaTrianguloIsosceles(valueLado1, valueLado2, valueBase);
  // alert (altura);
  const resultTriangle = document.getElementById("ResultadoTriangulo");
  resultTriangle.innerText = "la altura del triangulo es: " + altura;
  }

//Circulo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  // alert ("EL perimetro del circulo es: " + perimetro + "cm");
  const resultCircle = document.getElementById("ResultadoCirculo");
  resultCircle.innerText = "El perimetro del circulo es: " + perimetro;
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;
  const area = areaCirculo(value);
  // alert ("El area del circulo es: " + area + "cm^2");
  const resultCircle = document.getElementById("ResultadoCirculo");
  resultCircle.innerText = "El area del circulo es: " + area;
}