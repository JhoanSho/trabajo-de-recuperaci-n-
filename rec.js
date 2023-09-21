// 1. Algoritmo para determinar si un triángulo es isósceles, equilátero o escaleno:
function tipoDeTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

// 3. Algoritmo para mostrar los números del 1 al 200:
for (let i = 1; i <= 200; i++) {
    console.log(i);
}

// 4. Algoritmo para mostrar solo los números pares del 1 al 200:
for (let i = 2; i <= 200; i += 2) {
    console.log(i);
}

// 5. Algoritmo para contar cuántos números pares hay del 1 al 200:
let contador = 0;
for (let i = 1; i <= 200; i++) {
    if (i % 2 === 0) {
        contador++;
    }
}
console.log("Cantidad de números pares: " + contador);

// 6. Algoritmo para calcular el total de la compra:
const costoPantalon = 150000;
const costoCamisa = 75000;
const costoChaqueta = 250000;
const totalCompra = costoPantalon + costoCamisa + costoChaqueta;
console.log("Total de la compra: " + totalCompra);

// 7. Algoritmo para mostrar opciones de pago:
const totalCompra = 300000;

const opcionPago = prompt("Elige una opción de pago: Efectivo o Tarjeta de Crédito");

if (opcionPago === "Efectivo") {
    const cantidadRecibida = parseFloat(prompt("Ingrese la cantidad con la que paga: "));
    if (cantidadRecibida >= totalCompra) {
        const cambio = cantidadRecibida - totalCompra;
        console.log("Pago en efectivo. Cambio: " + cambio);
    } else {
        console.log("La cantidad recibida es insuficiente.");
    }
} else if (opcionPago === "Tarjeta de Crédito") {
    const primeros6Digitos = prompt("Ingrese los primeros 6 dígitos de la tarjeta: ");
    const ultimos4Digitos = prompt("Ingrese los últimos 4 dígitos de la tarjeta: ");
    const numeroCuotas = parseInt(prompt("Ingrese el número de cuotas: "));
    console.log("Pago con tarjeta de crédito.");
    console.log("Primeros 6 dígitos: " + primeros6Digitos);
    console.log("Últimos 4 dígitos: " + ultimos4Digitos);
    console.log("Número de cuotas: " + numeroCuotas);
} else {
    console.log("Opción de pago no válida.");
}

// 8. Algoritmo para aplicar un descuento si la compra supera los 300000:
let totalCompra = 475000;

if (totalCompra > 300000) {
    const descuento = 0.15 * totalCompra;
    totalCompra -= descuento;
    console.log("Se aplicó un 15% de descuento.");
}

console.log("Total de la compra después del descuento: " + totalCompra);

// 9. Algoritmo para mostrar los primeros n números de la serie de Fibonacci:
function serieFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

console.log(serieFibonacci(10));

// 10 Algoritmo para determinar si un número es primo
const numero=prompt('dijite el numero que desea saber si es primo') 
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(esPrimo(numero));