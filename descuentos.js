//const precioOriginal = 100;
//const descuento = 15;

//const porcentajePrecioConDescuento = 100 - descuento;
//const precioConDescuento = (P * porcentajePrecioConDescuento) / 100;

//console.log("El precio original es " + precioOriginal )

function porcentajeDescuento (precio, descuento) {
  const porcentaje = ((parseInt(descuento) / parseInt(precio)) * 100) + "%";
  return porcentaje;
}
function calcularPorcentajeDescuento(){
  const inputPrecio = document.getElementById("InputPrecio");
  const inputDescuento = document.getElementById("InputDescuento");

  const valuePrecio = inputPrecio.value;
  const valueDescuento = inputDescuento.value;

  const porcentaje = porcentajeDescuento(valuePrecio, valueDescuento);
  //alert (porcentaje);

  const resultPrice = document.getElementById("ResultPricePorcentajeDeDescuento");
  resultPrice.innerText = "El porcentaje de descuento es de: $" + porcentaje;
}

//Calcular Precio con Descuento

function precioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = parseInt(100) - parseInt(descuento);
  const precioConDescuento = (parseInt(precio) * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}
function calcularPrecioConDescuento() {
  const inputPrecioOriginal = document.getElementById("InputPrecioConDescuento");
  const inputPorcentajeDescuento = document.getElementById("InputPorcentajeDescuento");

  const valuePrecioOriginal = inputPrecioOriginal.value;
  const valuePorcentajeDescuento = inputPorcentajeDescuento.value;

  const nuevoPrecio = precioConDescuento(valuePrecioOriginal, valuePorcentajeDescuento);

  const resultPrice = document.getElementById("ResultPriceDescuento");
  resultPrice.innerText = "El precio con descuento es de: $" + nuevoPrecio;
}

//Descuentos con Cupones

function priceWithCoupon(precio, descuento) {
  const porcentajePrecioConCupon = parseInt(100) - parseInt(descuento);
  const precioConCupon = (parseInt(precio) * porcentajePrecioConCupon) / 100;
  return precioConCupon;
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrecioCupon");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

const coupons = [
  {
      name: "Black_Friday",
      discount: 15,
  },
  {
      name: "Cyber_Monday",
      discount: 30,
  },
  {
      name: "Christmas_Coupon",
      discount: 25,
  },
];

const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
  alert("El cupón " + couponValue + " no es válido");
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = priceWithCoupon(priceValue, descuento);

  const resultPriceCupon = document.getElementById("ResultPriceCupon");
  resultPriceCupon.innerText = "El precio con descuento son: $" + precioConDescuento;
}
}



