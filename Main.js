const tipofigura = prompt("Ingresa el tipo de figura que deseas calcular perimetro y area");

if (tipofigura === "triangulo") {
    const altura = parseFloat(prompt("Valor de altura"));
    const base = parseFloat(prompt("valor de base"));
    const lado1 = parseFloat(prompt("valor de lado1"));
    const lado2 = parseFloat(prompt("valor de lado2"));
    const lado3 = parseFloat(prompt("valor de lado3"));

    const areatriangulo = base * altura / 2;
    const perimetrotriangulo = lado1 + lado2 + lado3;


    console.log("Área del triángulo: " + areatriangulo);
    console.log("Perímetro del triángulo: " + perimetrotriangulo);
    console.log("Área + Perímetro del triángulo: " + triangulo);
} else if (tipofigura === "rectangulo") {
    const altura = parseFloat(prompt("Valor de altura"));
    const base = parseFloat(prompt("valor de base"));

    const perimetrorectangulo = 2 * (base + altura);
    const arearectangulo = base * altura;

    console.log("Área del rectángulo: " + arearectangulo);
    console.log("Perímetro del rectángulo: " + perimetrorectangulo);
} else if (tipofigura === "cuadrado") { 
    const lado = parseFloat(prompt("valor del lado"));

    const perimetrocuadrado = 4 * lado;
    const areacuadrado = lado * lado;

    console.log("Área del cuadrado: " + areacuadrado);
    console.log("Perímetro del cuadrado: " + perimetrocuadrado);
} else if (tipofigura === "circulo") {
    const radio = parseFloat(prompt("valor del radio"));
    const pi = 3.141592653589793;

    const areacirculo = pi * radio * radio;
    const perimetrocirculo = 2 * pi * radio;

    console.log("Área del círculo: " + areacirculo);
    console.log("Perímetro del círculo: " + perimetrocirculo);
} else {
    console.log("Tipo de figura no reconocido");
}